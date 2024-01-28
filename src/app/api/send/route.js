// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//     const { body } = await req.json();
//     const { email, subject, message } = body;
//     try {
//         resend.emails.send({
//             from: fromEmail,
//             to: 'ritesharyanbro@gmail.com', email,
//             subject: subject,
//             react: (
//                 <>
//                     <h1>{subject}</h1>
//                     <p>Thank you for contacting me.</p>
//                     <p>New Message submitted</p>
//                     <p>{message}</p>
//                 </>
//             )
//         });
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 })
//     }
// }

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { body } = await req.json();
    const { email, subject, message } = body;
    
    try {
        await resend.emails.send({
            from: fromEmail,
            to: { email: 'rithends@gmail.com' }, // Corrected line
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

        res.status(200).json({ status: 'success' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: error.message });
    }
}


// export async function POST(req, res) {
//     const { body } = await req.json();
//     const { email, subject, message } = body;

//     try {
//         await resend.emails.send({
//             from: fromEmail,
//             to: { email: 'rithends@gmail.com' },
//             subject: subject,
//             react: (
//                 <>
//                     <h1>{subject}</h1>
//                     <p>Thank you for contacting me.</p>
//                     <p>New Message submitted</p>
//                     <p>{message}</p>
//                 </>
//             )
//         });

//         return res.json({ status: 'success' });
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ error: error.message });
//     }
// }

