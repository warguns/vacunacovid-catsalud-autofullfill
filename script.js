function doTheMagic() {
    const dni = '{your NIE/DNI/PASSPORT}';
    const cip = null; // put here your cip if you want to use it instead
    const phone = '{put here your phone number}';
    const name = '{put here your name}';
    const surname = '{put here your surname}';
    const surname2 = '{put here your surname2}';
    const mail = '{put here your mail}';

    
    document.querySelector('vaccinapp-app').shadowRoot.querySelector('uxl-content-switcher').querySelector('vaccinapp-shell').shadowRoot.querySelector('uxl-content-switcher').querySelector('appointment-shell').shadowRoot.querySelector('uxl-content-switcher').querySelector('appointment-onboarding').shadowRoot.querySelector('#dismiss-btn').click();
    const userRegistration = document.querySelector('vaccinapp-app').shadowRoot.querySelector('uxl-content-switcher').querySelector('vaccinapp-shell').shadowRoot.querySelector('uxl-content-switcher').querySelector('appointment-shell').shadowRoot.querySelector('uxl-content-switcher').querySelector('appointment-user-registration').shadowRoot;
    if (cip == null) {
        userRegistration.querySelector('mwc-tab-bar').querySelector('#mdc-tab-2').click();
        userRegistration.querySelector('#documentID').value = dni;
        userRegistration.querySelector('#cip').remove();
    } else {
        userRegistration.querySelector('mwc-tab-bar').querySelector('#mdc-tab-1').click();
        userRegistration.querySelector('#cip').value = cip;
        userRegistration.querySelector('#documentID').remove();
    }
    userRegistration.querySelector('#phone').value = phone;
    userRegistration.querySelector('#phone').click();
    userRegistration.querySelector('#name').value = name;
    userRegistration.querySelector('#name').click();
    userRegistration.querySelector('#surname').value = surname;
    userRegistration.querySelector('#surname').click();
    userRegistration.querySelector('#surname2').value = surname2;
    userRegistration.querySelector('#surname2').click();
    userRegistration.querySelector('#mail').value = mail;
    userRegistration.querySelector('#mail').click();
    userRegistration.querySelector('#accept-btn').click();
}
doTheMagic();
