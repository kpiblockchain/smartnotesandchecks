var promisoryNote = artifacts.require("SmartPromissoryNote");

contract('promisoryNote', function(accounts) {
   
  it("puts data on the contract", function() {
    var sp;
    var account0 = accounts[0];
    var account1 = accounts[1];
    var data;

    return promisoryNote.deployed().then(function(instance) {
        sp = instance;
        return sp.setData("test", {from: account0}); // invoke  as transaction
      }).then(function() {
        return sp.getData.call({from: account0}); // invoke as call
      }).then(function(data) {
      assert.equal(data, "test", "Ladowanie weksla na kontrakt");
    });
  });

  it("Transfer owner", function() {
    var sp;
    var account0 = accounts[0];
    var account1 = accounts[1];
    var account2 = accounts[2];
    var newOwner;

    return promisoryNote.deployed().then(function(instance) {
        sp = instance;
        return sp.setData("test", {from: account0});
      }).then(function() {
        return sp.initOwnershipChange(account2, {from: account0});
      }).then(function() {
        return sp.acceptOwnership({from: account2});
      }).then(function() {
        return sp.owner.call({from: account1});
      }).then(function(owner) {
        assert.equal(owner, account2, "Zmiana wlasciciela kontraktu");
    });
  });

  it("Typowy scenariusz", function () {
    var sp;
    var wystawca = accounts[0];
    var pierwszy_wlasciciel = accounts[1];
    var drugi_wlasciciel = accounts[2];
    var tresc_wystawionego_weksla = '<?xml version="1.0" encoding="UTF-8"?>' +
        '<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">' +
        '<SignedInfo>' +
        '  <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2008/REC-xml-c14n11-20080502/" />' +
        '  <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />' +
        '  <Reference URI="#object">' +
        '    <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />' +
        '    <DigestValue>XXX</DigestValue>' +
        '  </Reference>' +
        '</SignedInfo>' +
        '<SignatureValue>XXX</SignatureValue>' +
        '<KeyInfo>' +
        '  <KeyValue>' +
        '    <RSAKeyValue>' +
        '      <Modulus>XXX</Modulus>' +
        '      <Exponent>XXX</Exponent>' +
        '    </RSAKeyValue>' +
        '  </KeyValue>' +
        '</KeyInfo>' +
        '<Weksel Id="object">' +
        '<wystawiony>' +
        '        <miejsce>Warszawa</miejsce>' +
        '        <data>2018-01-01 21:12:32</data>' +
        '</wystawiony>' +
        '<trasat>' +
        '        <imie></imie>' +
        '        <nazwisko></nazwisko>' +
        '        <adres></adres>' +
        '        <email></email>' +
        '</trasat>' +
        '<zaplace>' +
        '        <gdzie></gdzie>' +
        '        <data></data>' +
        '        <kwota>xxxx</kwota>' +
        '        <waluta>PLN</waluta>' +
        '</zaplace>' +
        '<remitent>' +
        '        <imie></imie>' +
        '        <nazwisko></nazwisko>' +
        '        <adres></adres>' +
        '        <email></email>' +
        '</remitent>' +
        '<klauzula>Oryginał dokumentu znajduje się na Blockchain XXX, Smart Contract o adresie 0xdeadf00dbaadf00ddeadf00dbaadf00dcafebaad</klauzula>' +
        '</Weksel>' +
        '</Signature>';

      var tresc_weksla_z_indosem = '<?xml version="1.0" encoding="UTF-8"?>' +
                  '<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">' +
                          '<SignedInfo>' +
                                  '<CanonicalizationMethod Algorithm="http://www.w3.org/TR/2008/REC-xml-c14n11-20080502/" />' +
                                  '<SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />' +
                                  '<Reference URI="#indos1">' +
                                          '<DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />' +
                                          '<DigestValue>XXX</DigestValue>' +
                                  '</Reference>' +
                          '</SignedInfo>' +
                          '<SignatureValue>XXX</SignatureValue>' +
                          '<KeyInfo>' +
                                  '<KeyValue>' +
                                          '<RSAKeyValue>' +
                                                  '<Modulus>XXX</Modulus>' +
                                                  '<Exponent>XXX</Exponent>' +
                                          '</RSAKeyValue>' +
                                  '</KeyValue>' +
                          '</KeyInfo>' +
                          '<Indos id=”indos1”>' +
                                  '<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">' +
                                          '<SignedInfo>' +
                                                  '<CanonicalizationMethod Algorithm="http://www.w3.org/TR/2008/REC-xml-c14n11-20080502/" />' +
                                                  '<SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />' +
                                                  '<Reference URI="#object">' +
                                                          '<DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />' +
                                                          '<DigestValue>XXX</DigestValue>' +
                                                  '</Reference>' +
                                          '</SignedInfo>' +
                                          '<SignatureValue>XXX</SignatureValue>' +
                                          '<KeyInfo>' +
                                                  '<KeyValue>' +
                                                          '<RSAKeyValue>' +
                                                                  '<Modulus>XXX</Modulus>' +
                                                                  '<Exponent>XXX</Exponent>' +
                                                          '</RSAKeyValue>' +
                                                  '</KeyValue>' +
                                          '</KeyInfo>' +
                                          '<Weksel Id="object">' +
                                                  '<wystawiony>' +
                                                          '<miejsce>Warszawa</miejsce>' +
                                                          '<data>2018-01-01 21:12:32</data>' +
                                                  '</wystawiony>' +
                                                  '<trasat>' +
                                                          '<imie></imie>' +
                                                          '<nazwisko></nazwisko>' +
                                                          '<adres></adres>' +
                                                          '<email></email>' +
                                                  '</trasat>' +
                                                  '<zaplace>' +
                                                          '<gdzie></gdzie>' +
                                                          '<data></data>' +
                                                          '<kwota>xxxx</kwota>' +
                                                          '<waluta>PLN</waluta>' +
                                                  '</zaplace>' +
                                                  '<remitent>' +
                                                          '<imie></imie>' +
                                                          '<nazwisko></nazwisko>' +
                                                          '<adres></adres>' +
                                                          '<email></email>' +
                                                  '</remitent>' +
                                                  '<klauzula>Oryginał dokumentu znajduje się na Blockchain XXX, Smart Contract o adresie 0xdeadf00dbaadf00ddeadf00dbaadf00dcafebaad</klauzula>' +
                                          '</Weksel>' +
                                  '</Signature>' +
                                  '<klauzula>Ustępuję na rzecz .. </klauzula>' +
                                  '<wystawionay>' +
                                  '<miejsce>Warszawa</miejsce>' +
                                  '<data>2018-01-01 21:12:32</data>' +
                                  '</wystawionay>' +
                          '</Indos>' +
                  '</Signature>';

    return promisoryNote.deployed().then(function(instance) {
        sp = instance;
        return sp.setData(tresc_wystawionego_weksla, {from: wystawca});
      }).then(function() {
        return sp.initOwnershipChange(pierwszy_wlasciciel, {from: wystawca});
      }).then(function() {
        return sp.acceptOwnership({from: pierwszy_wlasciciel});
        // weksel wystawiony
      }).then(function() {
        return sp.setData(tresc_weksla_z_indosem, {from: pierwszy_wlasciciel});
        // zaladowanie indosu na blockchain
      }).then(function() {
        return sp.initOwnershipChange(drugi_wlasciciel, {from: pierwszy_wlasciciel});
      }).then(function() {
        return sp.acceptOwnership({from: drugi_wlasciciel});
        // weksel sprzedany drugiemu wlascicielowi
      }).then(function() {
        return sp.initOwnershipChange(wystawca, {from: drugi_wlasciciel});
      }).then(function() {
        return sp.acceptOwnership({from: wystawca});
        // weksel spłacony
      }).then(function() {
        return sp.destroy({from: wystawca});
      }).then(function() {
        return sp.getData({from: wystawca})
      }).then(function () {
        assert.equal(1, 0, "Na zniszczonym wekslu nic nie mozna zrobic")
    }).catch(function (e) {
      // jest ok
    });

  })
});
