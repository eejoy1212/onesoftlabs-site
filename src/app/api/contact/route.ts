import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { fullName, email, phone, message } = await request.json();

  const accessToken = process.env.KAKAO_ACCESS_TOKEN; // 카카오 액세스 토큰 (관리자 계정)

  if (!accessToken) {
    return new NextResponse("Kakao Access Token is missing", { status: 500 });
  }

  try {
    const response = await fetch("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        template_object: JSON.stringify({
          object_type: "text",
          text: `📩 새로운 문의 도착!\n\n👤 이름: ${fullName}\n📧 이메일: ${email}\n📞 연락처: ${phone}\n📝 내용: ${message}`,
          link: {
            web_url: "https://yourwebsite.com/contact",
          },
        }),
      }),
    });

    if (!response.ok) throw new Error("Failed to send KakaoTalk message");

    return NextResponse.json({ message: "문의가 카카오톡으로 전송되었습니다!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "카카오톡 메시지 전송 실패" }, { status: 500 });
  }
}
