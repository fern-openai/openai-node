/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ListFineTuneEventsRequest {
    /**
     * Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a `data: [DONE]` message when the job is finished (succeeded, cancelled, or failed). If set to false, only events generated so far will be returned.
     *
     */
    stream?: boolean;
}
