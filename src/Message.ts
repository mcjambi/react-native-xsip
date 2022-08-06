export type MessageData = {
    accountId: number,
    contactUri: string,
    fromUri: string,
    toUri: string,
    body: string,
    contentType: string,
}

/**
 * This class describes the information and current status of a call.
 */
export default class Message {

    _accountId: number;
    _contactUri: string;
    _fromUri: string;
    _fromName: string;
    _fromNumber: string;
    _toUri: string;
    _body: string;
    _contentType: string;

    constructor({
        accountId,
        contactUri,
        fromUri,
        toUri,
        body,
        contentType
    }: MessageData) {
        let fromNumber = null;
        let fromName = null;

        if (fromUri) {
            let match = fromUri.match(/"([^"]+)" <sip:([^@]+)@/);

            if (match) {
                fromName = match[1];
                fromNumber = match[2];
            } else {
                match = fromUri.match(/sip:([^@]+)@/);

                if (match) {
                    fromNumber = match[1];
                }
            }
        }

        this._accountId = accountId;
        this._contactUri = contactUri;
        this._fromUri = fromUri;
        this._fromName = fromName;
        this._fromNumber = fromNumber;
        this._toUri = toUri;
        this._body = body;
        this._contentType = contentType;
    }

    /**
     * The account ID where this message belongs.
     * @returns {int}
     */
    getAccountId(): number {
        return this._accountId;
    }

    /**
     * The Contact URI of the sender, if present.
     * @returns {String}
     */
    getContactUri(): string {
        return this._contactUri;
    }

    /**
     * URI of the sender.
     * @returns {String}
     */
    getFromUri(): string {
        return this._fromUri;
    }

    /**
     * Sender name, or NULL if no name specified in URI.
     * @returns {String}
     */
    getFromName(): string {
        return this._fromName;
    }

    /**
     * Sender number
     * @returns {String}
     */
    getFromNumber(): string {
        return this._fromNumber;
    }

    /**
     * URI of the destination message.
     * @returns {String}
     */
    getToUri(): string {
        return this._toUri;
    }

    /**
     * Message body, or NULL if no message body is attached to this mesage.
     * @returns {String}
     */
    getBody(): string {
        return this._body;
    }

    /**
     * MIME type of the message.
     * @returns {String}
     */
    getContentType(): string {
        return this._contentType;
    }

}