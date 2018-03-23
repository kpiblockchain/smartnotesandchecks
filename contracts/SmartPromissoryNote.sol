pragma solidity ^0.4.18;

contract SmartPromissoryNote {

    address public owner;
    address public newPendingOwner;
    string public noteData; // AES256 + base64

    // - stworzenie kontraktu (twórca staje się właścicielem)
    function SmartPromissoryNote() public {
        owner = msg.sender;
    }

    modifier ownerOnly() {
        require(msg.sender == owner);
        _;
    }

    // - inicjacja zmiany właściciela (tylko dla właściciela)
    function initOwnershipChange(address newOwner) public ownerOnly() {
        require(!isOwnershipChangePending());
        require(newOwner != address(0));

        newPendingOwner = newOwner;
    }

    function cancelOwnershipChange() public ownerOnly() {
        require(isOwnershipChangePending());

        newPendingOwner = address(0);
    }

    function isOwnershipChangePending() public view returns(bool) {
        return newPendingOwner != address(0);
    }

    // - potwierdzenie zmiany właściciela (tylko dla adresata z inicjacji – zmienia się właściciel kontaktu)
    event OwnerChangedEvent(
        address from,
        address to
    );

    modifier pendingOwnerOnly() {
        require(msg.sender == newPendingOwner);
        _;
    }

    function acceptOwnership() public pendingOwnerOnly() {
        OwnerChangedEvent(owner, newPendingOwner);
        owner = newPendingOwner;
        newPendingOwner = address(0);
    }

    // - załadowanie dokumentu/weksla (dokument jest XML-em, ale w sumie kontakt nie musi w to wnikać) (tylko dla obecnego właściciela, możliwość wielokrotnego uruchamiania)
    event NoteDataUploadedEvent();

    function setData(string _data) public ownerOnly() {
        require(!isOwnershipChangePending());

        NoteDataUploadedEvent();
        noteData = _data;
    }

    function getData() public view returns(string) {
        return noteData;
    }

    // - operacja „zniszczenia” weksla (zmiana właściciela na NULL, czy jakiś inny adres tego typu, usunięcie dokumentu weksla)
    event SmartPromissoryNoteDestroyedEvent();

    function destroy() public ownerOnly() {
        require(!isOwnershipChangePending());

        SmartPromissoryNoteDestroyedEvent();
        selfdestruct(owner);
    }

    function() public payable {
        revert(); // blokujemy przesyłanie ether'u na ten kontrakt
    }
}
