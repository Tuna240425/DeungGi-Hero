"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Logo />
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 개인정보의 처리 목적</h2>
              <p className="text-gray-700 leading-relaxed">
                등기히어로(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>등기 서비스 제공 및 상담</li>
                <li>고객 문의사항 처리 및 응답</li>
                <li>서비스 개선을 위한 통계 분석</li>
                <li>마케팅 및 광고에의 활용</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 개인정보의 처리 및 보유기간</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-gray-900">보유기간: 수집일로부터 3년</p>
                <p className="text-sm text-gray-600 mt-1">단, 관련 법령에서 정한 보존기간이 있는 경우 해당 기간 동안 보관</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 수집하는 개인정보 항목</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">필수 수집 항목</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>성명</li>
                  <li>연락처 (휴대폰 번호)</li>
                  <li>이메일 주소</li>
                  <li>서비스 유형</li>
                </ul>
                <h3 className="font-semibold text-gray-900 mb-3 mt-6">자동 수집 항목</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>IP주소, 쿠키, 방문기록</li>
                  <li>서비스 이용기록, 접속로그</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 개인정보처리의 위탁</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-2 text-left">위탁받는 자</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">위탁하는 업무의 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2">이메일 발송 서비스</td>
                      <td className="border border-gray-200 px-4 py-2">고객 상담 및 문의 응답</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>개인정보 처리현황 통지요구</li>
                <li>개인정보 처리정지 요구</li>
                <li>개인정보의 정정·삭제 요구</li>
                <li>손해배상 청구</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 개인정보의 안전성 확보조치</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>개인정보에 대한 접근 제한</li>
                <li>개인정보를 취급하는 직원의 최소화 및 교육</li>
                <li>개인정보의 암호화</li>
                <li>해킹 등에 대비한 기술적 대책</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 개인정보보호책임자</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.
                </p>
                <div className="space-y-2">
                  <p><span className="font-medium">연락처:</span> 02-3477-9650</p>
                  <p><span className="font-medium">이메일:</span> halee@limleelawfirm.com</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 개인정보처리방침 변경</h2>
              <p className="text-gray-700 leading-relaxed">
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-blue-800">
                  <span className="font-medium">시행일자:</span> 2025년 1월 1일
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}