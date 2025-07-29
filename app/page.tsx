"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home, Phone, Mail, MapPin, Menu, X, FileText, ChevronDown, CheckCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { useActionState } from "react"
import { submitConsultation } from "@/actions/submit-consultation"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const initialState = {
    success: null,
    message: "",
  }

  const [state, formAction, isPending] = useActionState(submitConsultation, initialState)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (state && state.success === true) {
      setIsSubmitted(true)
    }
  }, [state])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const resetModal = () => {
    setShowModal(false)
    setIsSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-50 border-t border-slate-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`section-fade-in ${isVisible ? "animate" : ""}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">믿을 수 있는 등기의 시작</h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200">
              고객 맞춤형 법인 및 부동산 등기 서비스를 제공합니다.
            </p>

            // 기존 코드 (115-135줄 부근)
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto mb-8">
              <Link href="/corporate" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Building2 className="mr-2 h-5 w-5" />
                  법인등기 바로가기
                </Button>
              </Link>

              <Link href="/real-estate" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  // 이 부분을 수정하세요 - variant="outline" 제거하고 className 변경
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Home className="mr-2 h-5 w-5" />
                  부동산등기 바로가기
                </Button>
              </Link>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <FileText className="mr-2 h-5 w-5" />
              비용 안내서 받기
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">등기 전문 서비스 10년, 믿고 맡기세요</h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              등기히어로는 법인등기와 부동산등기 분야에서 10년간 축적된 전문성과 경험을 바탕으로 고객 맞춤형 서비스를
              제공합니다. 복잡한 등기 절차를 간소화하고, 신속하고 정확한 처리로 고객의 시간과 비용을 절약해드립니다.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">전문성</h3>
                  <p className="text-gray-600">10년간의 등기 전문 경험</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">신속성</h3>
                  <p className="text-gray-600">빠르고 정확한 처리</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">신뢰성</h3>
                  <p className="text-gray-600">고객 맞춤형 서비스</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">연락처 정보</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-1 gap-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">전화번호</h4>
                      <p className="text-gray-600 text-lg">02-3477-9650</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">이메일</h4>
                      <p className="text-gray-600 text-lg">halee@limleelawfirm.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">주소</h4>
                      <div className="text-gray-600 text-lg space-y-2">
                        <p>
                          <strong>[서울]</strong> 서울특별시 송파구 법원로 92, 806호(문정동, 파트너스1)
                        </p>
                        <p>
                          <strong>[제주]</strong> 제주시 남광북3길 7, 1층(이도이동)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 등기히어로. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button onClick={resetModal} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-xl font-semibold mb-4 text-center">비용 안내서 신청</h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  정확한 비용 안내를 위해 간단한 정보를 입력해주세요
                </p>

                <form action={formAction} className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">서비스 유형 선택</p>
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="type" value="신규법인 설립" required className="text-blue-600" />
                        <span className="text-sm">신규법인 설립</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="type" value="기존 법인 변경등기" className="text-blue-600" />
                        <span className="text-sm">기존 법인 변경등기</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="type" value="부동산등기" className="text-blue-600" />
                        <span className="text-sm">부동산등기</span>
                      </label>
                    </div>
                  </div>

                  <input
                    name="name"
                    type="text"
                    placeholder="성함을 입력해주세요"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="휴대폰 번호 (예: 010-1234-5678)"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="이메일 주소"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <input
                    name="password"
                    type="password"
                    placeholder="비밀번호 설정 (4자 이상)"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    minLength={4}
                    required
                  />

                  <label className="text-sm flex items-start space-x-2 cursor-pointer">
                    <input name="agree" type="checkbox" required className="mt-1 text-blue-600" />
                    <span className="text-gray-600">
                      개인정보 수집 및 이용에 동의합니다.
                      <br />
                      <span className="text-xs text-gray-500">(수집목적: 비용안내서 제공 및 상담, 보관기간: 3년)</span>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? "발송 중..." : "비용 안내서 받아보기"}
                  </button>
                </form>

                {state?.success === false && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm text-center">{state.message}</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-600">전송 완료!</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {state?.message || "성공적으로 전송되었습니다!"}
                  <br />
                  <span className="text-sm text-gray-500">영업시간 내에 담당자가 연락드리겠습니다.</span>
                </p>
                <button
                  onClick={resetModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
