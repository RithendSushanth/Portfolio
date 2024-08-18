import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    const body = await req.json();
    const { email, subject, message } = body;

    console.log('Received data:', { email, subject, message }); // Log the received request data

    try {
        await resend.emails.send({
            // from: fromEmail,
            from: 'Acme <onboarding@resend.dev>',
            to: 'rithends@gmail.com', // Ensure this is the correct recipient
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting me.</p>
                    <p>New Message submitted</p>
                    <p>{message}</p>
                </>
            )
        });

        console.log('Email sent successfully'); // Log success message
        return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error); // Log any errors from the email sending process
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
