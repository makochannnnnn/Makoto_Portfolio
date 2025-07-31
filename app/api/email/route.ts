import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer"; // 'type' importで型情報のみをインポート

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD, // Gmailの場合はアプリパスワード
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL, // 送信先を固定
      subject: `お問い合わせがありました (${email})`,
      text: message,
      replyTo: email, // ユーザーに返信しやすくするためにreplyToを追加すると親切
    };

    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "メールの送信に成功しました" }, { status: 200 });

  } catch (err) {
    // サーバーサイドでエラーログを記録
    console.error(err);
    return NextResponse.json({ message: "メールの送信に失敗しました" }, { status: 500 });
  }
}