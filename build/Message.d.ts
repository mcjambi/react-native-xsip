export declare type MessageData = {
    accountId: number;
    contactUri: string;
    fromUri: string;
    toUri: string;
    body: string;
    contentType: string;
};
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
    constructor({ accountId, contactUri, fromUri, toUri, body, contentType }: MessageData);
    /**
     * The account ID where this message belongs.
     * @returns {int}
     */
    getAccountId(): number;
    /**
     * The Contact URI of the sender, if present.
     * @returns {String}
     */
    getContactUri(): string;
    /**
     * URI of the sender.
     * @returns {String}
     */
    getFromUri(): string;
    /**
     * Sender name, or NULL if no name specified in URI.
     * @returns {String}
     */
    getFromName(): string;
    /**
     * Sender number
     * @returns {String}
     */
    getFromNumber(): string;
    /**
     * URI of the destination message.
     * @returns {String}
     */
    getToUri(): string;
    /**
     * Message body, or NULL if no message body is attached to this mesage.
     * @returns {String}
     */
    getBody(): string;
    /**
     * MIME type of the message.
     * @returns {String}
     */
    getContentType(): string;
}
