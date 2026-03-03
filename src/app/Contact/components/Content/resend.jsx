"use server"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name, email, phone, corpname, area, message) => {


  const emailHtml = `
<div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
        <table cellpadding="0" cellspacing="10" border="0" align="center"
            style="font-family: Arial, sans-serif; color: #333; background-color: #459ce925; border-radius: 5px; padding: 10px; max-width: 600px; width: 600px;">
            <tr>
                <td style="padding: 10px 20px;">

                    <table width="100%" cellpadding="10" cellspacing="0"
                        style="padding: 0px 10px; margin-bottom: 50px;">
                        <tr>
                            <td style="font-size: 60px;">
                                <h1 style="font-size: 60px; line-height: 60px; margin: 0; color: #333">Notificação
                                    Profissional</h1>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" cellpadding="15" cellspacing="15"
                        style="background-color: #ffffff; border-radius: 5px;">
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 16px; color: #333;"><strong>Nome</strong>
                                </p>
                                <p style="margin: 0; font-size: 16px;">${name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 16px; color: #333;"><strong>Email</strong>
                                </p>
                                <p style="margin: 0; font-size: 16px;">${email}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 16px; color: #333;"><strong>Contato</strong>
                                </p>
                                <p style="margin: 0; font-size: 16px;">${phone}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 16px; color: #333;"><strong>Empresa</strong>
                                </p>
                                <p style="margin: 0; font-size: 16px;">${corpname}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="margin: 0; font-size: 16px; color: #333;"><strong>Área</strong>
                                </p>
                                <p style="margin: 0; font-size: 16px;">${area}</p>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" cellpadding="15" cellspacing="15"
                        style="background-color: #ffffff; padding: 5px; border-radius: 5px; margin-top: 20px;">
                        <tr>
                            <td style="font-size: 16px;">
                                <p style="margin: 0; text-align: justify;">${message}</p>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" cellpadding="10" cellspacing="0" style="margin-top: 20px;">
                        <tr>
                            <td align="center" bgcolor="#333"
                                style="background-color: #333; text-align: center; border-radius: 5px;">
                                <a href="https://patryckcardozo.com/Contact"
                                    style="display: inline-block; color: white; text-decoration: none; padding: 0px 20px; font-size: 16px;">
                                    Página do Contato
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
`;

  await resend.emails.send({
    from: 'Portfolio <contato@patryckcardozo.com>',
    to: [`patryck-cardozo@hotmail.com`],
    subject: `Contato Profissional`,
    html: emailHtml,
  });
}

