import AccountRegistration from './AccountRegistration';
export declare type AccountConfiguration = {
    id: number;
    uri: string;
    name: string;
    username: string;
    domain: string | null;
    password: string;
    proxy: string;
    transport: string;
    contactParams: string;
    contactUriParams: string;
    regServer: string;
    regTimeout: string;
    regContactParams: string;
    regHeaders: Object;
};
/**
 * This describes account configuration and registration status
 */
export default class Account {
    _data: AccountConfiguration;
    _registration: AccountRegistration;
    constructor(data: any);
    /**
     * The account ID.
     * @returns {int}
     */
    getId(): number;
    /**
     * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
     * @returns {String}
     */
    getURI(): string;
    /**
     * Full name specified in Endpoint.createAccount().
     * @returns {String}
     */
    getName(): string;
    /**
     * Username specified in Endpoint.createAccount().
     * @returns {String}
     */
    getUsername(): string;
    /**
     * Domain specified in Endpoint.createAccount().
     * @returns {int|null}
     */
    getDomain(): string | null;
    /**
     * Password specified in Endpoint.createAccount().
     * @returns {String}
     */
    getPassword(): string;
    /**
     * Proxy specified in Endpoint.createAccount().
     * @returns {String}
     */
    getProxy(): string;
    /**
     * Transport specified in Endpoint.createAccount().
     * @returns {String}
     */
    getTransport(): string;
    /**
     * Additional parameters that will be appended in the Contact header
     * for this account.
     * @returns {String}
     */
    getContactParams(): string;
    /**
     * Additional URI parameters that will be appended in the Contact URI
     * for this account.
     * @returns {String}
     */
    getContactUriParams(): string;
    /**
     * Port specified in Endpoint.createAccount().
     * @returns {String}
     */
    getRegServer(): string;
    /**
     * Port specified in Endpoint.createAccount().
     * @returns {String}
     */
    getRegTimeout(): string;
    /**
     * @returns {String}
     */
    getRegContactParams(): string;
    /**
     * @returns {Object}
     */
    getRegHeaders(): Object;
    /**
     * Account registration status.
     * @returns {AccountRegistration}
     */
    getRegistration(): AccountRegistration;
}
