import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { subject, text } = req.body;

        if (!subject || !text) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Use your email provider
                auth: {
                    user: process.env.EMAIL_USER, // Your email address
                    pass: process.env.EMAIL_PASS, // Your email password or app password
                },
            });

            const mailOptions = {
                from: "Harun " +"<"+ `${process.env.EMAIL_USER}`+">",
                to: process.env.EMAIL_USER,
                subject,
                text,
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}