"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, CheckCircle, ArrowRight, Menu, X, Users, Settings, Trash2, HelpCircle } from "lucide-react"
import { Logo } from "@/components/logo"

interface DiagnosisStep {
  question: string
  options: string[]
  key: string
}

export default function CorporatePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDiagnosis, setShowDiagnosis] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result, setResult] = useState<string | null>(null)

  const diagnosisSteps: DiagnosisStep[] = [
    {
      question: "현재 어떤 법인을 운영하고 계신가요?",
      options: ["주식회사", "유한회사", "비영리법인", "준비 중", "기타"],
      key: "companyType",
    },
    {
      question: "어떤 업무를 처리하고 싶으신가요?",
      options: ["신규 설립", "대표자 변경", "사업장 주소 이전", "폐업", "기타"],
      key: "serviceType",
    },
    {
      question: "내부 의사결정(이사회, 총회 등)은 완료되었나요?",
      options: ["예", "아니오"],
      key: "decisionMade",
    },
    {
      question: "관련 서류(정관, 회의록 등)는 준비되셨나요?",
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
      // Generate result based on answers
      generateResult(newAnswers)
    }
  }

  const generateResult = (finalAnswers: Record<string, string>) => {
    const serviceType = finalAnswers.serviceType
    const companyType = finalAnswers.companyType

    let resultText = `${companyType}의 ${serviceType} 등기가 필요합니다. `

    if (finalAnswers.decisionMade === "아니오") {
      resultText += "먼저 내부 의사결정을 완료해주세요. "
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
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              서비스소개
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              진행절차
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
                서비스소개
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                진행절차
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">법인등기, 전문가에게 맡기세요</h1>
            <p className="text-xl text-gray-600 mb-8">창업부터 변경, 말소까지 모든 과정을 책임집니다</p>
            <Button
              size="lg"
              onClick={() => scrollToSection("consultation")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
            >
              무료 상담받기
            </Button>
          </div>
        </div>
      </section>

      {/* 서비스소개 Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">법인등기 서비스</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>법인 설립</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">주식회사, 유한회사 등 신규 법인 설립 등기</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>변경 등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">대표자, 주소, 목적 등 법인 정보 변경</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>기타 등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">증자, 감자, 합병 등 특수 등기</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle>폐업 등기</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">법인 해산 및 청산 등기</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 진행절차 Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">진행절차</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">의뢰</h3>
                <p className="text-gray-600">상담 및 서비스 의뢰</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">서류확인</h3>
                <p className="text-gray-600">필요 서류 검토 및 준비</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">등기신청</h3>
                <p className="text-gray-600">법원 등기신청 및 처리</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">완료보고</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              빠른 자가진단으로 필요한 등기를 확인해보세요
            </h2>
            <p className="text-lg text-gray-600 mb-8">몇 가지 질문으로 귀하에게 필요한 등기 유형을 알아보세요</p>

            {!showDiagnosis ? (
              <Button
                size="lg"
                onClick={() => setShowDiagnosis(true)}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
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
                        <Button onClick={openConsultationForm} className="bg-blue-600 hover:bg-blue-700">
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
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
                            className="p-4 text-left justify-start hover:bg-blue-50 hover:border-blue-300"
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
            <p className="text-lg text-gray-600 mb-8">법인등기에 대한 궁금한 점이 있으시면 언제든 문의해주세요</p>

            <Button
              size="lg"
              onClick={openConsultationForm}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
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
