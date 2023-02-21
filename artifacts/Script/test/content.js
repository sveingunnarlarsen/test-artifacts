
await sendEmail({
    to: "sveingunnarlarsen@gmail.com",
    from: "sveingunnarlarsen@gmail.com",
    subject: "TEST",
    html: 'test',
    attachments: [{
        filename: 'test.png',
        path: 'data:image/png;base64,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',
    }]
});
complete();


/*

Sends an email

await sendEmail({
    to: string | string[];
    subject: string;
    html?: string;
    from?: string;
    templateId?: string;
    primitives?: Record<string, string>;
    attachments?: unknown[];
    cc?: string | string[];
    bcc?: string | string[];
});

/*
You can also call the function passing individual parameters, this is only to maintain compatibility with existing code and should be considered deprecated.


As a minimum to, subject and html must be provided to send and email. If from is not specified it will use the default from
address specified in system settings.

If a template id is specified the template will be used instead of html. Templates can be created in the cockpit from
Development -> Resources -> Email Template.

When using a template values can be piped to the template using the primitives parameter, e.g.

Template:
Hi {=name}

With the above template {=name} can be replaced by providing the following object, {name: "John"}, as the primitives parameter, e.g.

await sendEmail({ 
    to: "to@email", 
    subject: "Subject", 
    from: "from@email", 
    templateId:" template-id", 
    primitives: {name: "John"}
});

Attachments can be added be added like this:

attachments: [
    {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
    },
    {   // binary buffer as an attachment
        filename: 'text2.txt',
        content: new Buffer('hello world!','utf-8')
    },
    {   // file on disk as an attachment
        filename: 'text3.txt',
        path: '/path/to/file.txt' // stream this file
    },
    {   // filename and content type is derived from path
        path: '/path/to/file.txt'
    },
    {   // stream as an attachment
        filename: 'text4.txt',
        content: fs.createReadStream('file.txt')
    },
    {   // define custom content type for the attachment
        filename: 'text.bin',
        content: 'hello world!',
        contentType: 'text/plain'
    },
    {   // use URL as an attachment
        filename: 'license.txt',
        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    },
    {   // encoded string as an attachment
        filename: 'text1.txt',
        content: 'aGVsbG8gd29ybGQh',
        encoding: 'base64'
    },
    {   // data uri as an attachment
        path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    },
    {
        // use pregenerated MIME node
        raw: 'Content-Type: text/plain\r\n' +
             'Content-Disposition: attachment;\r\n' +
             '\r\n' +
             'Hello world!'
    }
]
*/
