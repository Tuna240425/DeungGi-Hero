"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, CheckCircle, ArrowRight, Menu, X, Users, Gift, Shield, HelpCircle } from "lucide-react"
import { Logo } from "@/components/logo"

interface DiagnosisStep {
  question: string
  options: string[]
  key: string
}

export default function RealEstatePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDiagnosis, setShowDiagnosis] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)

  const diagnosisSteps: DiagnosisStep[] = [
    {
      question: "어떤 유형의 등기를 원하시나요?",
      options: ["매매", "상속", "증여", "신탁", "기타"],
      key: "registrationType",
    },
    {
      question: "해당 부동산은 어디에 있나요?",
      options: ["서울", "경기", "지방", "잘 모르겠다"],
      key: "location",
    },
    {
      question: "등기 권리자(명의자)가 현재 모두 생존해 있나요?",
      options: ["예", "아니오"],
      key: "rightsHolderAlive",
    },
    {
      question: "관련 서류는 준비되어 있나요?",
      options: ["예", "아니오", "잘 모르겠다"],
      key: "documentsReady",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleDiagnosisAnswer = (answer: string) => {
    const newAnswers = { ...answers, [diagnosisSteps[currentStep].key]: answer }
    setAnswers(newAnswers)

    if (currentStep < diagnosisSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      generateResult(newAnswers)
    }
  }

  const generateResult = (finalAnswers: Record<string, string>) => {
    const registrationType = finalAnswers.registrationType
    const location = finalAnswers.location

    let resultText = `${registrationType} 등기가 필요합니다. `

    if (location !== "잘 모르겠다") {
      resultText += `${location} 지역의 부동산으로 `
    }

    if (finalAnswers.rightsHolderAlive === "아니오") {
      resultText += "상속 관련 추가 절차가 필요할 수 있습니다. "
    }

    if (finalAnswers.documentsReady === "아니오" || finalAnswers.documentsReady === "잘 모르겠다") {
      resultText += "필요 서류 준비에 대한 상담이 필요합니다."
    } else {
      resultText += "서류가 준비되어 있어 신속한 처리가 가능합니다."
    }

    setResult(resultText)
  }

  const resetDiagnosis = () => {
    setCurrentStep(0)
    setAnswers({})
    setResult(null)
    setShowDiagnosis(false)
  }

  const openConsultationForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfKlMWu7W2zxqce0yBvRFPD0ifcNw9bOQa-eUeLimdXeERgBQ/viewform?usp=dialog",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              서비스범위
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              등기절차
            </button>
            <button
              onClick={() => scrollToSection("diagnosis")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              자가진단
            </button>
            <button
              onClick={() => scrollToSection("consultation")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              상담신청
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
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                서비스범위
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                등기절차
              </button>
              <button
                onClick={() => scrollToSection("diagnosis")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                자가진단
              </button>
              <button
                onClick={() => scrollToSection("consultation")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                상담신청
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-56 pb-16 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">부동산등기, 복잡하지 않습니다</h1>
            <p className="text-xl text-gray-600 mb-8">매매, 상속, 증여, 신탁 등 신속하게 처리해드립니다</p>
            <Button
              size="lg"
              onClick={() => scrollToSection("consultation")}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg"
            >
              지금 상담하기
            </Button>
          </div>
        </div>
      </section>

      {/* 서비스범위 Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">부동산등기 서비스 범위</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>매매등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">부동산 매매 시 소유권 이전 등기</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>상속등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">상속으로 인한 소유권 이전 등기</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>증여등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">증여로 인한 소유권 이전 등기</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>신탁등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">신탁 설정 및 해지 등기</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 등기절차 Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">등기절차</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">접수</h3>
                <p className="text-gray-600">등기 신청 접수 및 상담</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">서류 확인</h3>
                <p className="text-gray-600">필요 서류 검토 및 보완</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">신청</h3>
                <p className="text-gray-600">등기소 등기신청 및 처리</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">완료</h3>
                <p className="text-gray-600">등기 완료 및 서류 전달</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자가진단 Section */}
      <section id="diagnosis" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">등기 상황을 빠르게 진단해보세요</h2>
            <p className="text-lg text-gray-600 mb-8">몇 가지 질문으로 귀하에게 필요한 등기 유형을 알아보세요</p>

            {!showDiagnosis ? (
              <Button
                size="lg"
                onClick={() => setShowDiagnosis(true)}
                className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg"
              >
                <HelpCircle className="mr-2 h-5 w-5" />
                자가진단 시작하기
              </Button>
            ) : (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  {result ? (
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-4">진단 결과</h3>
                      <p className="text-lg text-gray-700 mb-6">{result}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={openConsultationForm} className="bg-green-600 hover:bg-green-700">
                          맞춤 상담 신청하기
                        </Button>
                        <Button variant="outline" onClick={resetDiagnosis}>
                          다시 진단하기
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-500">
                            {currentStep + 1} / {diagnosisSteps.length}
                          </span>
                          <Badge variant="outline">
                            {Math.round(((currentStep + 1) / diagnosisSteps.length) * 100)}%
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / diagnosisSteps.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-6">{diagnosisSteps[currentStep].question}</h3>

                      <div className="grid gap-3">
                        {diagnosisSteps[currentStep].options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            onClick={() => handleDiagnosisAnswer(option)}
                            className="p-4 text-left justify-start hover:bg-green-50 hover:border-green-300"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>

                      {currentStep > 0 && (
                        <Button variant="ghost" onClick={() => setCurrentStep(currentStep - 1)} className="mt-4">
                          이전 질문
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* 상담신청 Section */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">전문가 상담 신청</h2>
            <p className="text-lg text-gray-600 mb-8">부동산등기에 대한 궁금한 점이 있으시면 언제든 문의해주세요</p>

            <Button
              size="lg"
              onClick={openConsultationForm}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg"
            >
              상담 신청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
    </div>
  )
}
