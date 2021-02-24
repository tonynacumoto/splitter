pragma solidity >=0.6.0 <0.7.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
import "@openzeppelin/contracts/utils/Address.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol


contract YourContract is Ownable {

  string public purpose = "🛠 Do what you can, why not?";
  event Reset(bool success);
  event SetPurpose(address sender, string purpose);
  event PayeeAdded(address account, uint256 shares, bool admin);
  event PaymentReleased(address to, uint256 amount);
  event PaymentReceived(address from, uint256 amount);

  uint256 private _totalShares;
  uint256 private _totalReleased;

  mapping(address => uint256) private _shares;
  mapping(address => uint256) private _released;
  address[] private _payees;

 /**
  * @dev Creates an instance of `PaymentSplitter` where each account in `payees` is assigned the number of shares at
  * the matching position in the `shares` array.
  *
  * All addresses in `payees` must be non-zero. Both arrays must have the same non-zero length, and there must be no
  * duplicates in `payees`.
  */
  constructor() public {
    /* allow to be created with no initial shareholders */
  }

  // constructor (address[] memory payees, uint256[] memory shares_) public payable {
  //     // solhint-disable-next-line max-line-length
  //     require(payees.length == shares_.length, "PaymentSplitter: payees and shares length mismatch");
  //     require(payees.length > 0, "PaymentSplitter: no payees");

  //     for (uint256 i = 0; i < payees.length; i++) {
  //         addPayee(payees[i], shares_[i]);
  //     }
  // }

  function setPurpose(string memory newPurpose) onlyOwner public {
    purpose = newPurpose;
    console.log(msg.sender,"set purpose to",purpose);
    emit SetPurpose(msg.sender, purpose);
  }


    /**
     * @dev The Ether received will be logged with {PaymentReceived} events. Note that these events are not fully
     * reliable: it's possible for a contract to receive Ether without triggering this function. This only affects the
     * reliability of the events, and not the actual splitting of Ether.
     *
     * To learn more about this see the Solidity documentation for
     * https://solidity.readthedocs.io/en/latest/contracts.html#fallback-function[fallback
     * functions].
     */
    receive () external payable virtual {
        emit PaymentReceived(_msgSender(), msg.value);
    }

    /**
     * @dev Getter for the total shares held by payees.
     */
    function totalShares() public view returns (uint256) {
        return _totalShares;
    }

    /**
     * @dev Getter for the total amount of Ether already released.
     */
    function totalReleased() public view returns (uint256) {
        return _totalReleased;
    }

    /**
     * @dev Getter for the amount of shares held by an account.
     */
    function shares(address account) public view returns (uint256) {
        return _shares[account];
    }

    /**
     * @dev Getter for the amount of Ether already released to a payee.
     */
    function released(address account) public view returns (uint256) {
        return _released[account];
    }

    /**
     * @dev Getter for the address of the payee number `index`.
     */
    function payee(uint256 index) public view returns (address) {
        return _payees[index];
    }

    /**
     * @dev Triggers a transfer to `account` of the amount of Ether they are owed, according to their percentage of the
     * total shares and their previous withdrawals.
     */
    function release(address payable account) public virtual {
        require(_shares[account] > 0, "PaymentSplitter: account has no shares");

        uint256 totalReceived = address(this).balance + _totalReleased;
        uint256 payment = totalReceived * _shares[account] / _totalShares - _released[account];
        // 27.5 + 82.5 / 82.5 - 0

        require(payment != 0, "PaymentSplitter: account is not due payment");

        _released[account] = _released[account] + payment;
        _totalReleased = _totalReleased + payment;

        Address.sendValue(account, payment);
        emit PaymentReleased(account, payment);
    }

    /**
     * @dev Admin's backdoor to Add a new payee to the contract.
     * @param account The address of the payee to add.
     * @param shares_ The number of shares owned by the payee.
     */
    function addPayee(address account, uint256 shares_) public onlyOwner {
        require(account != address(0), "PaymentSplitter: account is the zero address");
        require(shares_ > 0, "PaymentSplitter: shares are 0");
        require(_shares[account] == 0, "PaymentSplitter: account already has shares");

        _payees.push(account);
        _shares[account] = shares_;
        _totalShares = _totalShares + shares_;
        emit PayeeAdded(account, shares_, true);
    }
    function reset() public onlyOwner {
        for (uint i=0; i<_payees.length; i++) {
            address account = _payees[i];
            _shares[account] = 0;
            _released[account] = 0;
        }
        _totalReleased = 0;
        _totalShares = 0;
        emit Reset(true);
    }
    

}
