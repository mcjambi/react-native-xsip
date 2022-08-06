/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration {
    _status: string;
    _statusText: string;
    _active: boolean;
    _reason: string;
    constructor({ status, statusText, active, reason }: {
        status: any;
        statusText: any;
        active: any;
        reason: any;
    });
    /**
     * Last registration status code (SIP status codes according to RFC 3261).
     * If status code is empty, the account is currently not registered. Any other value indicates the SIP
     * status code of the registration.
     *
     * @returns {string|null}
     */
    getStatus(): string | null;
    /**
     * String describing the registration status.
     *
     * @returns {string|null}
     */
    getStatusText(): string | null;
    /**
     * Flag to tell whether this account is currently registered
     * (has active registration session).
     *
     * @returns boolean
     */
    isActive(): boolean;
    /**
     * Reason phrase received.
     *
     * @returns {String|null}
     */
    getReason(): string | null;
    toJson(): {
        status: string;
        statusText: string;
        active: boolean;
        reason: string;
    };
}
