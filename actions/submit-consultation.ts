"use server"

interface FormState {
  success: boolean | null
  message: string
}

export async function submitConsultation(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    // 폼 데이터 추출 및 검증
    const name = formData.get("name")?.toString()
    const phone = formData.get("phone")?.toString()
    const email = formData.get("email")?.toString()
    const type = formData.get("type")?.toString()
    const agree = formData.get("agree")
    const password = formData.get("password")?.toString()

    if (!name || !phone || !email || !type || !agree || !password) {
      return {
        success: false,
        message: "모든 필드를 입력해주세요.",
      }
    }

    // 폼 데이터 구성
    const submissionData = {
      name,
      phone,
      email,
      type,
      agree: agree ? "동의" : "미동의",
      password,
      submittedAt: new Date().toISOString(),
      source: "등기히어로 웹사이트",
    }

    // Make 웹훅으로 데이터 전송
    const response = await fetch("https://hook.eu2.make.com/7h4joc117ste2h9h43plb3s022cpjf32", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    })

    if (response.ok) {
      return {
        success: true,
        message: "성공적으로 전송되었습니다!",
      }
    } else {
      return {
        success: false,
        message: "요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.",
      }
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    }
  }
}
