/* Park & Co Lawyers · Public Self-Help (DIY) & Legal Cost Protection Hub
   100% Static GitHub Pages Client Application (100% Static Self-Contained Build)
   Strictly enforces 0% Hangul in ?lang=en and realistic client legal economics. */
(() => {
  "use strict";

  const VALID_TABS = new Set([
    "selfhelp",
    "employment",
    "family",
    "immigration",
    "reader",
    "studio",
    "vault",
  ]);

  const I18N = {
    ko: {
      pageTitle: "법무법인 박앤코 · 혼자 해결하는 호주 법률 가이드 & 꼭 변호사를 찾아야 할 순간",
      inquiryUrl: "https://parklawyers.com.au/links/?lang=ko",
      inquiryLabel: "parklawyers.com.au/links/?lang=ko",

      // Ecosystem Top Bar
      ecoHubBrand: "← 박앤코 법률·비자 통합 안내",
      ecoVisaLink: "무료 비자 진단 가이드 (714직종·이력서 분석)",
      ecoEmpNavLink: "고용법·스폰서 비자 길잡이",
      ecoFamNavLink: "호주 가족법 길잡이",
      ecoFaqLink: "호주 이민·직장 생활 자주 묻는 질문",
      ecoCurrentLabel: "혼자 해결하기 & 변호사비 아끼는 가이드",
      ecoEmergencyLink: "비자 응급실 (거절·취소 진단)",
      ecoCaseReviewLink: "기술이민 서류 사전점검 ($495)",
      ecoConsultCta: "박앤코 법률상담 신청 ↗",

      // Masthead & KPIs
      pilotBadge: "CLIENT SELF-HELP & LEGAL COST GUIDE",
      verifiedBadge: "2026–27 최신 호주 법령·수수료 기준 반영",
      portalTitle: "법무법인 박앤코 · 혼자 해결하는 호주 법률 가이드 & 꼭 변호사를 찾아야 할 순간",
      kpi1Num: "배보다 배꼽 크지 않게",
      kpi1: "혼자 할 수 있는 단계는 무료 도구로 비용을 아끼고 꼭 필요한 순간에만 변호사를 찾으세요",
      kpi2Num: "25개 업종 · 자동계산",
      kpi2: "못 받은 월급·주말수당·12% 연금을 직접 계산해 내 몫을 지키고 7일 내 지급 요청서까지 만드세요",
      kpi3Num: "호주 가족법 · $4,950",
      kpi3: "간단한 온라인 이혼은 혼자 쉽게 · 합의서 법원 확정(Consent Orders)과 연락 피하는 배우자 대응은 변호사와 함께",
      kpi4Num: "판례 이야기 18편 · 32종",
      kpi4: "이민·고용·가족법 실제 분쟁 사례 18편과 무료 PDF·워드·엑셀·슬라이드 32종을 바로 열어보세요",

      // Primary Navigation Tabs (7 Public Client Tabs)
      tabSelfHelp: "내 상황별 해결법 찾기",
      tabWages: "못 받은 월급 계산 · 지급요청서",
      tabFamily: "이혼 · 재산합의 · 배우자 대응",
      tabImmigration: "비자 자가진단 · 위기 대응",
      tabReader: "셀프 진행 설명서 (4권)",
      tabStudio: "한눈에 보는 PDF · 슬라이드 · 영상",
      tabVault: "무료 서식 · 자료실 (32종)",

      // Tab 0: Hero, Cost Matrix, Wizard & Quick Shelf
      heroPhilosophyOverline: "REALISTIC LEGAL ECONOMICS · DIY FIRST, RETAIN AT THE RIGHT INFLECTION POINT",
      heroPhilosophyTitle: "변호사를 선임하면 오히려 손해인 사건이 있고 혼자 버티다 큰코다치는 순간도 있습니다",
      heroPhilosophyDesc:
        "호주에서는 재판에서 이겨도 내 변호사비를 상대방에게 받아낼 수 없는 사건이 꽤 많아요. 공정근로위원회(FWC) 일반 절차(s 611)나 법원 임금 소액청구($100,000 이하 · 공정근로법 s 570), 외도를 따지지 않는 단순 온라인 이혼 신청(가족법 s 48)이 대표적이에요. 이런 초기·소액 단계부터 변호사를 쓰면 받으실 돈보다 비용이 더 커질 수 있으니 이곳의 무료 계산기와 설명서로 먼저 직접 진행해 보세요. 반대로 이민·고용·가족법에서 하루라도 넘기면 기회가 사라지는 마감 기한(해고 21일 · 비자 재심 28일 · 이혼 후 재산분할 12개월)이 다가왔거나 비자 거절·고액 분쟁·법원 합의명령처럼 혼자 감당하기 어려운 순간에는 바로 박앤코 전문변호사와 상의하셔야 큰 손해를 막을 수 있어요.",
      jumpEmpChip: "못 받은 월급 계산기 & 지급요청서 →",
      jumpFamChip: "이혼 재산합의($4,950) & 배우자 대응 →",
      jumpImmiChip: "무료 비자 진단 & 거절·취소 대응 →",

      matrixOverline: "3-PRACTICE LEGAL COST & INFLECTION POINT GUIDE",
      matrixTitle: "분야별 혼자 해결하면 돈 아끼는 단계와 전문가 확인이 필요한 순간",
      matrixDesc: "지금 내 일이 어느 단계에 해당하는지 먼저 살펴보고 변호사비 낭비와 마감 기한 놓침을 함께 막아 보세요.",

      wizOverline: "INTERACTIVE 13-SCENARIO SELF-ASSESSMENT",
      wizTitle: "내 상황을 눌러보세요 · 혼자 해결하는 순서와 전문가 확인 기준을 바로 알려드려요",

      quickShelfOverline: "DIRECT WEB READER & A4 PDF MANUALS (4 GUIDES)",
      quickShelfTitle: "분야별 셀프 진행 설명서 & 호주 공식 서류 작성법 바로 읽기",
      quickShelfDesc: "프로그램 설치 없이 4권의 설명서 전체 내용과 서류 체크리스트, 계산 공식, 요약 PDF를 화면에서 편하게 읽어보세요.",
      readInWebCta: "화면에서 바로 읽기 →",
      sectionsUnit: "개 단원",

      // Tab 1: Reader & Client-Side Search
      searchPlaceholder: "4권 설명서 한 번에 검색하기 (예: Form 888, 페이슬립, 연금, 합의명령, 비자 거절 28일...)",
      clearSearch: "지우기",
      manualListHeading: "셀프 진행 설명서 목록 (4권)",
      loadingDoc: "설명서를 불러오고 있어요…",
      tocHeading: "이 글의 목차",
      wideReaderBtn: "넓게 보기",
      stdReaderBtn: "기본 폭으로",
      dlWordBtn: "워드(.docx) 받기",
      viewSummaryPdfBtn: "A4 요약 PDF 보기",
      dlPdfBtn: "PDF 받기",
      openExcelLabBtn: "월급 자동계산기 열기",
      searchHitsHeader: "설명서 검색 결과",
      noSearchHits: "찾으시는 단어가 포함된 설명서 대목이 없어요. 다른 단어로 다시 검색해 보세요.",

      // Tab 2: Employment Hub & Calculator
      noCalcKicker: "PROTECTING YOUR NET RECOVERY · FAIR WORK ACT s 548 & s 570 ECONOMICS",
      noCalcTitle: "못 받은 월급은 왜 처음에 직접 계산해 보는 게 내 지갑에 유리할까요?",
      noCalcDesc:
        "호주 법원의 임금 소액청구($100,000 이하 · 공정근로법 s 548)는 재판에서 이겨도 상대방에게 변호사비를 물릴 수 없어요(s 570). 그래서 처음 출퇴근 시간을 더하는 단계부터 변호사에게 맡기면 받으실 월급보다 변호사비가 더 많이 나오는 안타까운 일이 생길 수 있어요. 먼저 아래 25개 업종 시급 계산기와 자동 엑셀표로 못 받은 금액을 직접 확인해 보세요. $50,000 미만이라면 법원 소액청구(Form 5)로 혼자 진행해 내 돈을 100% 다 챙기시는 게 훨씬 이득이에요. 반대로 못 받은 돈이 $50,000 이상이거나 사장님이 회사를 폐업시킨 경우(s 550), 또는 비자가 걸린 상태에서 갑자기 해고된 경우(21일 마감)에는 계산표를 첨부해 박앤코 전문변호사에게 도움을 요청해 주세요.",
      downloadXlsxBtn: "자동계산 엑셀(.xlsx) 받기",
      downloadEmpPdfBtn: "02번 임금 계산 요약 PDF 받기",
      openWagesManualBtn: "02번 설명서 전체 읽기",

      sandboxOverline: "FY 2026–27 · 25 MODERN AWARDS & 129 CLASSIFICATIONS · WAGES + OVERTIME + LEAVE + 12% OTE SUPER",
      sandboxTitle: "25개 업종 · 129개 직급별 못 받은 월급 · 주말/야간/연장수당 · 연차 · 12% 연금 간편 계산기",
      sandboxReset: "예시로 되돌리기 (한식당 Lv 2 캐주얼)",
      awardSearchPlaceholder: "내 일자리·직무로 시급 찾기 (예: 한식당, 카페, 바리스타, 타일, 정육, 청소, 미용, 필라테스, NDIS, 치과...)",

      lblAwardSelect: "1. 일하신 업종 선택 (25개 공식 업종 + 직접 입력)",
      lblLevelSelect: "2. 내 직급·연차 선택 (129개 세부 기준)",
      lblEmpType: "3. 고용 형태 (주말·파트타임 시급 자동 반영)",
      empTypeCasual: "캐주얼 (25% 포함)",
      empTypeFt: "풀타임 정규직",
      empTypePt: "파트타임",

      lblMonFriHrs: "평일 낮 일한 시간 (시간)",
      lblMonFriRate: "평일 법정 시급 ($/시간)",
      lblSatHrs: "토요일 일한 시간 (시간)",
      lblSatRate: "토요일 법정 시급 ($/시간)",
      lblSunHrs: "일요일 일한 시간 (시간)",
      lblSunRate: "일요일 법정 시급 ($/시간)",
      lblPhHrs: "공휴일 일한 시간 (시간)",
      lblPhRate: "공휴일 법정 시급 ($/시간)",
      lblNightHrs: "저녁·심야 일한 시간 (시간)",
      lblNightRate: "평일 저녁·심야 추가 수당 (+$/시간)",
      lblOt1Hrs: "연장근무 앞구간 (처음 2~3시간)",
      lblOt1Rate: "연장근무 앞구간 시급 ($/시간 · 연금 제외)",
      lblOt2Hrs: "연장근무 뒷구간 (이후 추가 시간)",
      lblOt2Rate: "연장근무 뒷구간 시급 ($/시간 · 연금 제외)",
      lblActualPaid: "실제로 받은 1주일치 세전 월급 ($)",
      lblWeeksCount: "이렇게 일한 기간 (몇 주)",
      lblLeaveHrs: "못 받은 남은 연차 시간 (정규·파트타임만, +17.5% 반영)",
      lblNoticeWks: "못 받은 해고예고 수당 주수 (정규·파트타임만, 몇 주)",

      sbTotalHours: "1주일 총 일한 시간",
      sbOteGross: "1주일 일반근무 법정 급여 (연금 12% 부과 대상)",
      sbOtGross: "1주일 연장근무 법정 수당 (연금 제외)",
      sbStatutoryGross: "법대로 받아야 할 1주일 세전 총액",
      sbActualGross: "실제로 받은 1주일 세전 금액",
      sbWeeklyWageShortfall: "1주일당 덜 받은 월급 차액",
      sbWeeklySuper: "1주일당 쌓여야 할 12% 퇴직연금(Super)",
      sbLeaveNoticeAdd: "못 받은 남은 연차(+17.5%) · 해고예고 수당",
      sbCombinedWeekly: "1주일당 못 받은 돈 합계 (월급 차액 + 연금)",
      sbMultiWeekPrefix: "주치 누적 + 연차/해고예고 예상 청구 총액",
      sbCourtFeeLabel: "연방순회·가족법원(Form 5) 예상 접수 수수료",
      copyCalcSummaryBtn: "내 계산 결과 한 줄 복사하기 (요청서·상담 첨부용)",
      copiedCalcSummaryToast: "계산 결과 요약이 복사되었어요. 요청서나 상담 창에 바로 붙여넣으세요.",
      sbNoteNonCompound:
        "알아두실 점: 호주 캐주얼 주말·공휴일 시급은 캐주얼 시급에 또 곱하는 게 아니라 정규직 기본급에 가산 비율을 더해서 계산해요. 또한 12% 퇴직연금(Super)은 연장근무 수당을 뺀 일반 근무 급여(OTE)에만 붙어요.",

      excelInspectorTitle: "못 받은 월급 자동계산 엑셀 미리보기 (계산 결과 ↔ 엑셀 수식 확인)",
      excelModeValues: "계산된 숫자 보기",
      excelModeFormulas: "=엑셀 수식 보기",
      downloadXlsxShort: "엑셀(.xlsx) 받기",
      formulasBadgeSuffix: "개 수식",

      // Tab 5: Multimedia Studio (4 PDFs, 12 Slides, 2 Videos)
      studioPillPdfs: "한눈에 보는 A4 요약 PDF (4권)",
      studioPillSlides: "12장 핵심 요약 슬라이드",
      studioPillShorts: "1분 핵심 요약 영상 (2편)",
      pdfOverline: "150-DPI A4 PRINT-READY CLIENT PDF GALLERY · 4 EDITIONS",
      pdfTitle: "출력해서 바로 쓰는 분야별 핵심 요약 PDF 4권 (종합 · 이민 · 고용 · 가족법)",
      openRawPdf: "새 창에서 크게 보기",
      downloadPdfBtn: "이 PDF 내려받기",
      pageWord: "쪽",
      slidesOverline: "16:9 WIDESCREEN CLIENT GUIDE PLAYER",
      slidesTitle: "혼자 해결하는 단계와 변호사를 찾아야 할 순간 · 12장 슬라이드 요약",
      prevSlide: "← 이전 장",
      nextSlide: "다음 장 →",
      downloadPptxBtn: "슬라이드(.pptx) 받기",
      shortsOverline: "9:16 VERTICAL BRIEFING VIDEOS (1080×1920)",
      shortsTitle: "놓치면 안 되는 마감 기한 & 밀린 월급 계산법 요약 영상 2편",
      downloadMp4Btn: "영상(.mp4) 받기",

      // Tab 6: 32-Deliverable Library
      vaultOverline: "COMPLETE CLIENT SELF-HELP REPOSITORY · SHA-256 VERIFIED",
      vaultTitle: "전체 32종 한국어·영어 무료 설명서·서식·계산기 모음 (화면 열람 & 내려받기)",
      edAll: "전체 보기 (32)",
      edKo: "한국어 자료 (16)",
      edEn: "영어 자료 EN (16)",
      fmtAll: "모든 파일 형식",
      thEdition: "언어",
      thFormat: "파일 종류",
      thTitle: "자료 이름",
      thSize: "파일 크기",
      thHash: "원본 확인코드",
      thActions: "바로 보기 · 내려받기",
      previewInPortalBtn: "화면에서 보기",
      downloadFileBtn: "내려받기",

      // Footer
      ctaFooterKicker: "WHEN DIY IS NO LONGER ENOUGH · PARK & CO LAWYERS",
      ctaFooterTitle: "마감 기한이 코앞이거나 혼자 해결하기 벅찬 단계에 오셨나요?",
      ctaFooterDesc:
        "이곳의 설명서와 계산기는 처음부터 변호사를 선임하면 오히려 손해가 날 수 있는 소액·초기 단계에서 여러분의 소중한 돈을 지켜 드리기 위해 만든 무료 법률 안내 자료예요. 비자 거절이나 취소 통지(NOICC · PIC 4020 · ART 재심), 회사 스폰서 비자(482/186), 해고 후 21일 내 비자 위기나 $50,000 이상 고액 임금 소송(폐업 대표자 책임 s 550), 호주 가족법 법원 합의명령(Consent Orders)이나 연락을 피하는 배우자 재산 확인이 필요한 단계라면 혼자 고민하지 마시고 아래 상담 링크로 박앤코 전문변호사를 찾아 주세요.",
      ctaFooterLegal:
        "안내 말씀: 이 사이트의 글을 읽거나 무료 서식을 내려받는 것만으로 변호사 선임 계약이 맺어지는 것은 아니에요. 내 사건의 법정 마감 날짜를 챙기고 기본 사실관계를 확인하는 일은 본인께서 꼭 먼저 살펴주셔야 해요. 무료 공익 법률지원이 필요하신 경우 Legal Aid QLD(1300 65 11 88) 또는 퀸즐랜드 변호사회(QLS · qls.com.au · 1300 367 757) 공식 창구도 함께 활용하실 수 있어요. (공식 이메일: cpark@parkcolawyers.com)",
      ctaDirector: "박창민 대표변호사 (Chang Min Park)",
      ctaCredential: "Legal Practitioner Director · QLS Accredited Specialist in Immigration Law",
      ctaLocation: "Park & Co Lawyers · Underwood QLD · cpark@parkcolawyers.com",
      copyEmailBtn: "상담 신청 주소 복사하기",
      copiedAddrToast: "박앤코 상담 신청 링크가 복사되었어요.",
    },

    en: {
      pageTitle: "Park & Co Lawyers · Australian 3-Practice Self-Help (DIY) & Legal Cost Protection Hub",
      inquiryUrl: "https://parklawyers.com.au/links/",
      inquiryLabel: "parklawyers.com.au/links",

      // Ecosystem Top Bar
      ecoHubBrand: "← Park & Co Legal & Visa Hub",
      ecoVisaLink: "Visa Solution Guide (714 SOL · CV Match)",
      ecoEmpNavLink: "Employment & Sponsor Navigator",
      ecoFamNavLink: "Family Law Navigator",
      ecoFaqLink: "AU Immigration & Workplace FAQ",
      ecoCurrentLabel: "DIY Self-Help & Legal Cost Protection Hub",
      ecoEmergencyLink: "Visa Emergency Clinic (Refusal / NOICC)",
      ecoCaseReviewLink: "GSM Pre-Lodgement Audit ($495)",
      ecoConsultCta: "Book Legal Consultation ↗",

      // Masthead & KPIs
      pilotBadge: "CLIENT SELF-HELP & LEGAL COST GUIDE",
      verifiedBadge: "FY 2026–27 Primary Statutes & Case Law Verified",
      portalTitle: "Park & Co Lawyers · 3-Practice Self-Help (DIY) & Legal Cost Protection Guide",
      kpi1Num: "Protect Net Recovery",
      kpi1: "Use free tools & official forms in no-costs stages, and retain a solicitor at critical legal inflection points",
      kpi2Num: "25 Awards · 208 Formulas",
      kpi2: "FWA s 570 cost protection · interactive wage, penalty, leave & 12% OTE Super calculator + 7-day demand",
      kpi3Num: "Family s 48 · $4,950",
      kpi3: "Self-file simple online divorce · Retain counsel for Consent Orders & non-responsive ex-partner disclosure",
      kpi4Num: "18 Columns · 32 Guides",
      kpi4: "18 case-law deep-dive columns + 32 verified KO/EN A4 PDFs, Word manuals, Excel & slide guides",

      // Primary Navigation Tabs
      tabSelfHelp: "Situation & Cost Guide",
      tabWages: "Employment & Wage Calculator",
      tabFamily: "Family Law & Consent Orders",
      tabImmigration: "Immigration & Visa Roadmap",
      tabReader: "DIY Manuals (4 Guides)",
      tabStudio: "Summary PDFs (4) · Slides · Video",
      tabVault: "All 32 Client Files",

      // Tab 0: Hero, Cost Matrix, Wizard & Quick Shelf
      heroPhilosophyOverline: "REALISTIC LEGAL ECONOMICS · DIY FIRST, RETAIN AT THE RIGHT INFLECTION POINT",
      heroPhilosophyTitle: "Knowing When DIY Saves Your Payout and When a Solicitor Prevents Irreversible Loss",
      heroPhilosophyDesc:
        "Australian law includes strict no-costs jurisdictions, such as Fair Work Commission general proceedings (s 611), Fair Work Act s 570 small claims up to $100,000, and straightforward No-Fault online divorce applications (Family Law Act s 48), where paying hourly legal fees from day one can exceed your net financial benefit. Start those stages free with our calculators and A4 manuals to protect 100% of your recovery. Conversely, when strict limitation bars in migration, employment, or family law (21d, 28d, 12m), high-value claims, visa survival, or binding Court Consent Orders arise, timely representation from Park & Co Lawyers prevents severe financial loss.",
      jumpEmpChip: "Employment · 25-Award Calculator & Demand Kit →",
      jumpFamChip: "Family Law · Consent Orders ($4,950) & Disclosure →",
      jumpImmiChip: "Immigration · Visa Solution Guide & Urgent Help →",

      matrixOverline: "3-PRACTICE LEGAL COST & INFLECTION POINT GUIDE",
      matrixTitle: "Compare Cost-Saving DIY Stages and Critical Inflection Points Across All 3 Practices",
      matrixDesc: "Check where your matter sits right now so you neither overpay in a no-costs stage nor miss a fatal statutory deadline.",

      wizOverline: "INTERACTIVE 13-SCENARIO SELF-ASSESSMENT",
      wizTitle: "Select Your Situation for Immediate DIY Cost-Protection Steps & Escalation Criteria",

      quickShelfOverline: "DIRECT WEB READER & A4 PDF MANUALS (4 GUIDES)",
      quickShelfTitle: "Read Our 4 Practice-Area Self-Help Manuals & Official Form Guides in Browser",
      quickShelfDesc: "Browse full manuals, official government form checklists, award formulas, and print-ready A4 PDFs with zero installation.",
      readInWebCta: "Open in Web Reader →",
      sectionsUnit: "sections",

      // Tab 1: Reader & Search
      searchPlaceholder: "Search across all 4 manuals (e.g. Form 888, s 557C, Payday Super, Consent Orders, ART 28 days...)",
      clearSearch: "Clear",
      manualListHeading: "DIY MANUAL LIBRARY (4)",
      loadingDoc: "Loading manual…",
      tocHeading: "ON THIS PAGE",
      wideReaderBtn: "Wide View",
      stdReaderBtn: "Standard Width",
      dlWordBtn: "Download .docx",
      viewSummaryPdfBtn: "View A4 Summary PDF",
      dlPdfBtn: "Download PDF",
      openExcelLabBtn: "Open 208-Formula Calculator",
      searchHitsHeader: "MANUAL SEARCH RESULTS",
      noSearchHits: "No matching manual sections found. Try another statutory section or form number.",

      // Tab 2: Employment Hub & Calculator
      noCalcKicker: "PROTECTING YOUR NET RECOVERY · FAIR WORK ACT s 548 & s 570 ECONOMICS",
      noCalcTitle: "Why Self-Calculating Your Unpaid Wages First Protects Your Net Payout",
      noCalcDesc:
        "Under Fair Work Act s 548 and s 570, small claims up to $100,000 operate in a no-costs jurisdiction, meaning even if you win, the Court rarely orders the employer to reimburse your lawyer's fees. Paying hourly rates to audit basic timesheets can erode your recovery. Use our 25-Award Calculator and 208-Formula Excel below to quantify your claim free, self-file Form 5 for claims under $50,000, and consult Park & Co with your completed schedule once your claim reaches $50,000+, requires s 550 director liability, or involves a 21-day visa-linked dismissal.",
      downloadXlsxBtn: "Download 208-Formula Excel (.xlsx)",
      downloadEmpPdfBtn: "Download 02 Employment A4 PDF",
      openWagesManualBtn: "Read Full Manual 02 in Browser",

      sandboxOverline: "FY 2026–27 · 25 MODERN AWARDS & 129 CLASSIFICATIONS · WAGES + OVERTIME + LEAVE + 12% OTE SUPER",
      sandboxTitle: "Interactive 25-Award / 129-Classification Wage, Penalty, Overtime, Leave & 12% Super Calculator",
      sandboxReset: "Reset Example (Restaurant Lv 2 Casual)",
      awardSearchPlaceholder: "Quick-search occupation, certificate or award (e.g. barista, Cert III, tiler, boner, Pilates, NDIS, dental, welder, MA000119...)",

      lblAwardSelect: "1. Select Applicable Modern Award (25 Instruments + Custom)",
      lblLevelSelect: "2. Classification Level (129 Verified FY 2026–27 Rates)",
      lblEmpType: "3. Employment Type (Non-Compounding & PT Loading Auto-Applied)",
      empTypeCasual: "Casual (25%)",
      empTypeFt: "Full-Time (FT)",
      empTypePt: "Part-Time (PT)",

      lblMonFriHrs: "Mon–Fri Daytime Hours (h)",
      lblMonFriRate: "Mon–Fri Applicable Rate ($/h)",
      lblSatHrs: "Saturday Hours (h)",
      lblSatRate: "Saturday Non-Compounding Rate ($/h)",
      lblSunHrs: "Sunday Hours (h)",
      lblSunRate: "Sunday Non-Compounding Rate ($/h)",
      lblPhHrs: "Public Holiday Hours (h)",
      lblPhRate: "Public Holiday Rate ($/h)",
      lblNightHrs: "Evening / Shift Hours (h)",
      lblNightRate: "Weekday Late Add-On (+$/h)",
      lblOt1Hrs: "Overtime Tier 1 Hours (h, first 2–3h)",
      lblOt1Rate: "Overtime Tier 1 Rate ($/h · excl. Super)",
      lblOt2Hrs: "Overtime Tier 2 Hours (h, 200% tier)",
      lblOt2Rate: "Overtime Tier 2 Rate ($/h · excl. Super)",
      lblActualPaid: "Actual Weekly Gross Paid ($)",
      lblWeeksCount: "Repeated Weeks Count (Weeks)",
      lblLeaveHrs: "Unpaid Annual Leave Hours (FT/PT +17.5% loading)",
      lblNoticeWks: "Unpaid s 117 Notice Weeks (FT/PT Weeks)",

      sbTotalHours: "Total Weekly Hours",
      sbOteGross: "Weekly Ordinary Time Gross (OTE · Super-Bearing)",
      sbOtGross: "Weekly Overtime Gross (OT · Excl. from Super)",
      sbStatutoryGross: "Total Weekly Statutory Gross",
      sbActualGross: "Actual Weekly Gross Paid",
      sbWeeklyWageShortfall: "Weekly Unpaid Wage Shortfall",
      sbWeeklySuper: "Weekly 12.0% OTE Superannuation (SG)",
      sbLeaveNoticeAdd: "Unpaid Annual Leave (+17.5%) & Notice",
      sbCombinedWeekly: "Combined Weekly Shortfall (Wages + Super)",
      sbMultiWeekPrefix: "-Week Projected Claim + Leave / Notice",
      sbCourtFeeLabel: "Indicative FCFCOA Form 5 Filing Fee",
      copyCalcSummaryBtn: "Copy Self-Calculation Summary (For Demand / Consultation)",
      copiedCalcSummaryToast: "Self-calculated underpayment summary copied to clipboard.",
      sbNoteNonCompound:
        "Methodology: Australian Modern Award casual weekend/public holiday rates apply non-compounding multipliers to the FT base rate, and 12% Superannuation Guarantee (ATO SGR 2009/2) applies strictly to Ordinary Time Earnings (OTE), excluding overtime.",

      excelInspectorTitle: "Interactive 208-Formula Excel Workbook Inspector (Calculated Values ↔ Live =Formulas)",
      excelModeValues: "Show Calculated Values",
      excelModeFormulas: "Show Live =Formulas",
      downloadXlsxShort: "Download .xlsx",
      formulasBadgeSuffix: "formulas",

      // Tab 5: Multimedia Studio
      studioPillPdfs: "A4 Print-Ready Summary PDFs (4 Editions)",
      studioPillSlides: "12-Slide Legal Cost Guide Deck",
      studioPillShorts: "9:16 Vertical Briefing Videos (2)",
      pdfOverline: "150-DPI A4 PRINT-READY CLIENT PDF GALLERY · 4 EDITIONS",
      pdfTitle: "4 Print-Ready A4 Summary PDF Manuals (Master · Immigration · Employment · Family Law)",
      openRawPdf: "Open Original PDF in New Tab",
      downloadPdfBtn: "Download Selected PDF",
      pageWord: "Page",
      slidesOverline: "16:9 WIDESCREEN CLIENT GUIDE PLAYER",
      slidesTitle: "12-Slide Widescreen Guide: Self-Help (DIY) Stages vs Solicitor Inflection Points",
      prevSlide: "← Previous Slide",
      nextSlide: "Next Slide →",
      downloadPptxBtn: "Download .pptx Deck",
      shortsOverline: "9:16 VERTICAL BRIEFING VIDEOS (1080×1920)",
      shortsTitle: "2 Vertical Video Briefings: Statutory Deadlines & Unpaid Wages Self-Calculation",
      downloadMp4Btn: "Download .mp4 Video",

      // Tab 6: 32-Deliverable Library
      vaultOverline: "COMPLETE CLIENT SELF-HELP REPOSITORY · SHA-256 VERIFIED",
      vaultTitle: "All 32 Verified Bilingual Self-Help Manuals, Templates & Calculators (Read & Download Free)",
      edAll: "All (32)",
      edKo: "Korean KO (16)",
      edEn: "English EN (16)",
      fmtAll: "All Formats",
      thEdition: "Edition",
      thFormat: "Format",
      thTitle: "Deliverable Title & Relative Path",
      thSize: "Size",
      thHash: "SHA-256 (12c)",
      thActions: "Preview · Download",
      previewInPortalBtn: "Preview in Browser",
      downloadFileBtn: "Download",

      // Footer
      ctaFooterKicker: "WHEN DIY IS NO LONGER ENOUGH · PARK & CO LAWYERS",
      ctaFooterTitle: "Facing an Urgent Statutory Deadline or High-Stakes Legal Inflection Point?",
      ctaFooterDesc:
        "The manuals and calculators on this hub provide general legal information designed to protect your net financial benefit during straightforward or no-costs DIY stages. When your matter reaches visa refusals, NOICC cancellations, PIC 4020, ART appeals, corporate sponsorships (482/186), 21-day visa-linked dismissals, employer defences, ≥$50,000 / s 550 wage claims, Family Court Consent Orders, or stonewalling ex-partner disclosure, contact Park & Co Lawyers via our official consultation hub.",
      ctaFooterLegal:
        "Legal Notice: Viewing or downloading resources on this hub does not create a solicitor-client retainer. Individuals remain responsible for monitoring their own statutory limitation dates prior to formal engagement. For free public legal assistance or general solicitor directory inquiries, you may also contact Legal Aid Queensland (1300 65 11 88) or the Queensland Law Society (qls.com.au · 1300 367 757). (Official email: cpark@parkcolawyers.com)",
      ctaDirector: "Chang Min Park · Legal Practitioner Director",
      ctaCredential: "QLS Accredited Specialist in Immigration Law · Park & Co Lawyers",
      ctaLocation: "Park & Co Lawyers · Underwood QLD · cpark@parkcolawyers.com",
      copyEmailBtn: "Copy Official Consultation Link",
      copiedAddrToast: "Official Park & Co consultation hub link copied to clipboard.",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const initLang = urlParams.get("lang") === "en" ? "en" : "ko";
  const reqTab = urlParams.get("tab") || "selfhelp";
  const initTab = VALID_TABS.has(reqTab) ? reqTab : "selfhelp";

  const state = {
    lang: initLang,
    activeTab: initTab,
    bootstrap: null,
    bootstrapCache: {},
    activeDocId: "00_master",
    readerWide: false,

    // Wizard
    wizardPractice: "all",
    selectedWizardId: null,

    // Employment Calculator & Directory
    empSector: "all",
    empAwardCode: "MA000119",
    empPresetId: "ma000119_lv2",
    empType: "casual",
    dirSector: "all",
    dirQuery: "",
    dirExpandedCodes: { MA000119: true },
    selectedAwardLabel: "",
    lastCalculatedSummaryAmount: "",
    lastCalculatedSummaryBlock: "",

    // Excel, Studio & Library
    excelSheetIdx: 1,
    excelMode: "values",
    slideIdx: 0,
    activePdfKey: null,
    vaultEdition: "all",
    vaultFormat: "all",
  };

  function esc(val) {
    return String(val ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function t(key) {
    const lg = state.lang === "en" ? "en" : "ko";
    return (I18N[lg] && I18N[lg][key]) || key;
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("portalToast");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.add("hidden"), 2800);
  }

  async function copyText(text, toastMsg) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (__) {}
      document.body.removeChild(ta);
    }
    if (toastMsg) showToast(toastMsg);
  }

  function handleActionToken(token) {
    if (!token) return;
    if (token.startsWith("tab:")) {
      const targetTab = token.slice(4);
      if (VALID_TABS.has(targetTab)) {
        switchTab(targetTab);
      }
    } else if (token.startsWith("doc:")) {
      const docId = token.slice(4);
      state.activeDocId = docId;
      switchTab("reader");
    }
  }

  const hubCtx = {
    state,
    esc,
    copyText,
    showToast,
    handleActionToken,
    applyAwardPresetToInputs: () => applyAwardPresetToInputs(),
  };

  window.ParkCoPortal = { esc, state, switchTab, handleActionToken };

  function applyStaticI18n() {
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.lang = state.lang;
    document.title = t("pageTitle");

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.setLang === state.lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (I18N[state.lang] && key in I18N[state.lang]) {
        el.textContent = I18N[state.lang][key];
      }
    });

    document.querySelectorAll(".parkco-svc-link").forEach((a) => {
      const href = state.lang === "en" ? a.dataset.enHref : a.dataset.koHref;
      if (href) a.href = href;
    });

    const mastLink = document.getElementById("mastheadInquiryLink");
    const mastTxt = document.getElementById("mastheadInquiryText");
    const footLink = document.getElementById("footerInquiryLink");
    if (mastLink) mastLink.href = t("inquiryUrl");
    if (mastTxt) mastTxt.textContent = t("inquiryLabel");
    if (footLink) {
      footLink.href = t("inquiryUrl");
      footLink.textContent = t("inquiryUrl");
    }

    const searchIn = document.getElementById("docSearchInput");
    if (searchIn) searchIn.placeholder = t("searchPlaceholder");
    const awSearchIn = document.getElementById("sbAwardSearch");
    if (awSearchIn) awSearchIn.placeholder = t("awardSearchPlaceholder");
  }

  function switchTab(tabId, { scrollTop = true } = {}) {
    if (!VALID_TABS.has(tabId)) tabId = "selfhelp";
    state.activeTab = tabId;

    const url = new URL(window.location.href);
    url.searchParams.set("lang", state.lang);
    url.searchParams.set("tab", tabId);
    window.history.replaceState({}, "", url.toString());

    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `panel-${tabId}`);
    });

    if (tabId === "reader") {
      ensureDocLoaded(state.activeDocId);
    }
    if (tabId === "studio") {
      requestAnimationFrame(() => renderSlideStage());
    }
    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /* =========================================================================
     STATIC BOOTSTRAP FETCH & LANGUAGE SWITCH
     ========================================================================= */
  async function loadLanguageBootstrap(lang) {
    state.lang = lang === "en" ? "en" : "ko";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", state.lang);
    url.searchParams.set("tab", state.activeTab);
    window.history.replaceState({}, "", url.toString());

    applyStaticI18n();
    switchTab(state.activeTab, { scrollTop: false });

    if (!state.bootstrapCache[state.lang]) {
      const resp = await fetch(`./data/bootstrap_${state.lang}.json`);
      state.bootstrapCache[state.lang] = await resp.json();
    }
    state.bootstrap = state.bootstrapCache[state.lang];

    const wizCases = state.bootstrap.wizard_cases || [];
    if (!wizCases.some((w) => w.id === state.selectedWizardId)) {
      state.selectedWizardId = wizCases.length ? wizCases[0].id : null;
    }

    const docs = state.bootstrap.docs || [];
    if (!docs.some((d) => d.id === state.activeDocId)) {
      state.activeDocId = docs.length ? docs[0].id : "00_master";
    }

    // Map activePdfKey across language toggles (e.g. master_ko <-> master_en)
    const pdfs = state.bootstrap.pdfs || [];
    if (state.activePdfKey) {
      const basePrefix = state.activePdfKey.replace(/_(ko|en)$/, "");
      const mapped = `${basePrefix}_${state.lang}`;
      if (pdfs.some((p) => p.key === mapped)) {
        state.activePdfKey = mapped;
      }
    }
    if (!pdfs.some((p) => p.key === state.activePdfKey)) {
      state.activePdfKey = pdfs.length ? pdfs[0].key : null;
    }

    if (window.ParkCoHubs) {
      window.ParkCoHubs.renderCostMatrix(hubCtx);
      window.ParkCoHubs.renderClientWizard(hubCtx);
      window.ParkCoHubs.renderEmploymentExtras(hubCtx);
      window.ParkCoHubs.renderFamilyHub(hubCtx);
      window.ParkCoHubs.renderImmigrationHub(hubCtx);
    }

    renderQuickShelf();
    renderReaderSidebar();
    renderWagesTab();
    renderStudioTab();
    renderVaultFilters();
    renderVaultTable();
    ensureDocLoaded(state.activeDocId);
    switchTab(state.activeTab, { scrollTop: false });

    const searchInput = document.getElementById("docSearchInput");
    const tray = document.getElementById("searchResultsTray");
    const clrBtn = document.getElementById("docSearchClearBtn");
    if (searchInput) searchInput.value = "";
    if (tray) {
      tray.innerHTML = "";
      tray.classList.add("hidden");
    }
    if (clrBtn) clrBtn.classList.add("hidden");
  }

  /* =========================================================================
     QUICK 5-MANUAL SHELF
     ========================================================================= */
  function renderQuickShelf() {
    const grid = document.getElementById("quickShelfGrid");
    if (!grid || !state.bootstrap) return;
    grid.innerHTML = (state.bootstrap.docs || [])
      .map(
        (d) => `
        <div class="shelf-card" data-practice="${esc(d.practice)}" data-open-doc="${esc(d.id)}" role="button" tabindex="0">
          <div>
            <span class="shelf-badge num">${esc(d.badge)}</span>
            <h3 class="shelf-title">${esc(d.short_title)}</h3>
            <p class="shelf-sub">${esc(d.subtitle)}</p>
          </div>
          <div class="shelf-foot">
            <span>${esc(t("readInWebCta"))}</span>
            <span class="num">${d.toc_count} ${esc(t("sectionsUnit"))}</span>
          </div>
        </div>`
      )
      .join("");

    grid.querySelectorAll("[data-open-doc]").forEach((card) => {
      const handler = () => {
        state.activeDocId = card.dataset.openDoc;
        switchTab("reader");
      };
      card.addEventListener("click", handler);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handler();
        }
      });
    });
  }

  /* =========================================================================
     FULL-TEXT 5-MANUAL READER & CLIENT-SIDE INSTANT SEARCH
     ========================================================================= */
  function renderReaderSidebar() {
    const listEl = document.getElementById("readerDocList");
    if (!listEl || !state.bootstrap) return;
    listEl.innerHTML = (state.bootstrap.docs || [])
      .map(
        (d) => `
        <button type="button" class="doc-nav-btn ${d.id === state.activeDocId ? "active" : ""}" data-doc-select="${esc(d.id)}">
          <span class="doc-nav-badge num">${esc(d.badge)}</span>
          <span class="doc-nav-title">${esc(d.short_title)}</span>
        </button>`
      )
      .join("");

    listEl.querySelectorAll("[data-doc-select]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeDocId = btn.dataset.docSelect;
        renderReaderSidebar();
        ensureDocLoaded(state.activeDocId, { scrollToAnchor: null });
      });
    });
  }

  function ensureDocLoaded(docId, { scrollToAnchor = null } = {}) {
    if (!state.bootstrap || !state.bootstrap.docs) return;
    const docs = state.bootstrap.docs;
    const doc = docs.find((d) => d.id === docId) || docs[0];
    if (!doc) return;
    state.activeDocId = doc.id;
    paintDocument(doc, scrollToAnchor);
  }

  function paintDocument(doc, scrollToAnchor) {
    renderReaderSidebar();
    const barEl = document.getElementById("readerActionBar");
    const paperEl = document.getElementById("readerPaper");
    const tocEl = document.getElementById("readerTocNav");
    if (!barEl || !paperEl || !tocEl) return;

    barEl.innerHTML = `
      <div>
        <div class="pilot-verified num">${esc(doc.badge)}</div>
        <strong style="font-size:15px;">${esc(doc.short_title)}</strong>
      </div>
      <div class="studio-head-actions">
        <button type="button" class="btn-outline btn-sm" id="readerWideToggleBtn">${esc(state.readerWide ? t("stdReaderBtn") : t("wideReaderBtn"))}</button>
        <a href="${esc(doc.docx_download_url)}" download class="btn-primary btn-sm">${esc(t("dlWordBtn"))}</a>
        <button type="button" class="btn-outline btn-sm" id="readerJumpPdfBtn">${esc(t("viewSummaryPdfBtn"))}</button>
        <a href="${esc(doc.pdf_download_url)}" download class="btn-outline btn-sm">${esc(t("dlPdfBtn"))}</a>
        ${
          doc.xlsx_download_url
            ? `<button type="button" class="btn-outline btn-sm" id="readerJumpExcelBtn">${esc(t("openExcelLabBtn"))}</button>`
            : ""
        }
      </div>
    `;

    paperEl.innerHTML = doc.html;

    // Intercept internal tab links rendered inside manual markdown if any
    paperEl.querySelectorAll("a[href^='./?']").forEach((a) => {
      a.addEventListener("click", (e) => {
        try {
          const u = new URL(a.getAttribute("href"), window.location.href);
          const tb = u.searchParams.get("tab");
          if (tb && VALID_TABS.has(tb)) {
            e.preventDefault();
            switchTab(tb);
          }
        } catch (_) {}
      });
    });

    tocEl.innerHTML = (doc.toc || [])
      .map(
        (item) =>
          `<a href="#${esc(item.id)}" class="toc-link lvl-${item.level}" data-toc-anchor="${esc(item.id)}">${esc(item.title)}</a>`
      )
      .join("");

    tocEl.querySelectorAll("[data-toc-anchor]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(a.dataset.tocAnchor);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    document.getElementById("readerWideToggleBtn")?.addEventListener("click", (ev) => {
      state.readerWide = !state.readerWide;
      document.querySelector(".reader-layout")?.classList.toggle("wide-mode", state.readerWide);
      ev.currentTarget.textContent = state.readerWide ? t("stdReaderBtn") : t("wideReaderBtn");
    });

    document.getElementById("readerJumpPdfBtn")?.addEventListener("click", () => {
      state.activePdfKey = doc.pdf_key;
      renderPdfViewer();
      switchTab("studio", { scrollTop: false });
      setTimeout(() => {
        document.getElementById("pdfSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    });

    document.getElementById("readerJumpExcelBtn")?.addEventListener("click", () => {
      switchTab("employment");
    });

    if (scrollToAnchor) {
      setTimeout(() => {
        document.getElementById(scrollToAnchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  }

  function highlightTermsHtml(snippet, terms) {
    let safe = esc(snippet);
    for (const term of terms) {
      if (!term) continue;
      const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
      safe = safe.replace(re, "<mark>$1</mark>");
    }
    return safe;
  }

  function searchBootstrapManuals(query) {
    const docs = state.bootstrap?.docs || [];
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];

    const hits = [];
    for (const doc of docs) {
      for (const sec of doc.sections || []) {
        const hay = `${sec.heading || ""} ${sec.text || ""}`;
        const hayLower = hay.toLowerCase();
        if (terms.every((tm) => hayLower.includes(tm))) {
          const firstPos = hayLower.indexOf(terms[0]);
          const start = Math.max(0, firstPos - 45);
          const rawSnippet = (start > 0 ? "…" : "") + hay.slice(start, start + 150).trim() + "…";
          hits.push({
            doc_id: doc.id,
            doc_badge: doc.badge,
            anchor: sec.anchor || "top",
            heading: sec.heading || doc.short_title,
            snippet_html: highlightTermsHtml(rawSnippet, terms),
          });
          if (hits.length >= 18) return hits;
        }
      }
    }
    return hits;
  }

  function wireReaderSearch() {
    const input = document.getElementById("docSearchInput");
    const clr = document.getElementById("docSearchClearBtn");
    const tray = document.getElementById("searchResultsTray");
    if (!input || !clr || !tray) return;

    let timer = null;
    input.addEventListener("input", () => {
      const q = input.value.trim();
      clr.classList.toggle("hidden", !q);
      clearTimeout(timer);
      if (!q) {
        tray.classList.add("hidden");
        return;
      }
      timer = setTimeout(() => {
        const hits = searchBootstrapManuals(q);
        tray.classList.remove("hidden");
        if (!hits.length) {
          tray.innerHTML = `<div style="font-size:13.5px;color:#5A5654;">${esc(t("noSearchHits"))}</div>`;
          return;
        }
        tray.innerHTML = `
          <div class="sidebar-heading num">${esc(t("searchHitsHeader"))} (${hits.length})</div>
          <div class="search-hit-grid">
            ${hits
              .map(
                (h) => `
              <button type="button" class="search-hit-card" data-hit-doc="${esc(h.doc_id)}" data-hit-anchor="${esc(h.anchor)}">
                <span class="doc-nav-badge num">${esc(h.doc_badge)}</span>
                <strong style="display:block;font-size:13.5px;margin-bottom:4px;">${esc(h.heading)}</strong>
                <span style="font-size:12.5px;color:#5A5654;line-height:1.45;">${h.snippet_html}</span>
              </button>`
              )
              .join("")}
          </div>`;

        tray.querySelectorAll("[data-hit-doc]").forEach((btn) => {
          btn.addEventListener("click", () => {
            state.activeDocId = btn.dataset.hitDoc;
            tray.classList.add("hidden");
            ensureDocLoaded(state.activeDocId, { scrollToAnchor: btn.dataset.hitAnchor });
          });
        });
      }, 90);
    });

    clr.addEventListener("click", () => {
      input.value = "";
      clr.classList.add("hidden");
      tray.classList.add("hidden");
      input.focus();
    });
  }

  /* =========================================================================
     EMPLOYMENT UNDERPAYMENT CALCULATOR & 208-FORMULA EXCEL INSPECTOR
     ========================================================================= */
  function round2(n) {
    return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
  }

  function fmtAud(n) {
    return "$" + round2(n).toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function findSelectedAwardAndLevel() {
    const awards = state.bootstrap?.hubs?.awards_bundle?.awards || [];
    if (!awards.length || state.empAwardCode === "custom" || state.empPresetId === "custom") {
      return { aw: null, lv: null };
    }
    let aw = awards.find((a) => a.award_code === state.empAwardCode);
    if (!aw) {
      aw = awards.find((a) => (a.levels || []).some((l) => l.id === state.empPresetId)) || awards[0];
      if (aw) state.empAwardCode = aw.award_code;
    }
    if (!aw) return { aw: null, lv: null };
    let lv = (aw.levels || []).find((l) => l.id === state.empPresetId);
    if (!lv) {
      lv = (aw.levels || [])[0] || null;
      if (lv) state.empPresetId = lv.id;
    }
    return { aw, lv };
  }

  function applyAwardPresetToInputs() {
    const ntHrsLbl = document.getElementById("lblNightHrsText");
    const ntRateLbl = document.getElementById("lblNightRateText");
    if (state.empAwardCode === "custom" || state.empPresetId === "custom") {
      state.selectedAwardLabel = state.lang === "en" ? "Custom Manual Hourly Rates" : "직접 입력한 시급";
      if (ntHrsLbl) ntHrsLbl.textContent = t("lblNightHrs");
      if (ntRateLbl) ntRateLbl.textContent = t("lblNightRate");
      if (typeof hubCtx.renderClassificationInspector === "function") {
        hubCtx.renderClassificationInspector();
      }
      recalcSandbox();
      return;
    }

    const { aw, lv } = findSelectedAwardAndLevel();
    if (!aw || !lv) {
      recalcSandbox();
      return;
    }

    const ratePack = state.empType === "pt" ? lv.pt : state.empType === "ft" ? lv.ft : lv.casual;
    const map = {
      sbMonFriRate: ratePack.mf,
      sbSatRate: ratePack.sat,
      sbSunRate: ratePack.sun,
      sbPhRate: ratePack.ph,
      sbNightRate: ratePack.eve,
      sbOt1Rate: ratePack.ot1,
      sbOt2Rate: ratePack.ot2,
    };
    Object.entries(map).forEach(([id, v]) => {
      const el = document.getElementById(id);
      if (el && v !== undefined) el.value = Number(v).toFixed(2);
    });

    if (ntHrsLbl) {
      if (aw.eve_mode === "rate") {
        ntHrsLbl.textContent =
          state.lang === "en"
            ? "Evening/Night Shift Hours (h, separate from daytime)"
            : "오후·야간 근무 시간 (낮 근무시간과 따로 입력)";
      } else {
        ntHrsLbl.textContent =
          state.lang === "en"
            ? "Evening/Late Add-on Hours (h, within Mon–Fri)"
            : "저녁·심야 추가수당 시간 (평일 근무시간 중 해당 시간)";
      }
    }
    if (ntRateLbl) {
      ntRateLbl.textContent = aw.eve_label || t("lblNightRate");
    }

    const typeTag =
      state.empType === "pt"
        ? state.lang === "en"
          ? "Part-Time"
          : "파트타임"
        : state.empType === "ft"
        ? state.lang === "en"
          ? "Full-Time"
          : "풀타임 정규직"
        : state.lang === "en"
        ? "Casual 25%"
        : "캐주얼 25%";
    state.selectedAwardLabel = `${aw.award_code} ${aw.name} · ${lv.title} (${typeTag})`;

    if (typeof hubCtx.renderClassificationInspector === "function") {
      hubCtx.renderClassificationInspector();
    }
    recalcSandbox();
  }

  function recalcSandbox() {
    const val = (id) => Math.max(0, parseFloat(document.getElementById(id)?.value || "0") || 0);
    const mfH = val("sbMonFriHrs");
    const mfR = val("sbMonFriRate");
    const satH = val("sbSatHrs");
    const satR = val("sbSatRate");
    const sunH = val("sbSunHrs");
    const sunR = val("sbSunRate");
    const phH = val("sbPhHrs");
    const phR = val("sbPhRate");
    const ntH = val("sbNightHrs");
    const ntR = val("sbNightRate");
    const ot1H = val("sbOt1Hrs");
    const ot1R = val("sbOt1Rate");
    const ot2H = val("sbOt2Hrs");
    const ot2R = val("sbOt2Rate");
    const paid = val("sbActualPaid");
    const weeks = Math.max(1, Math.round(val("sbWeeks") || 1));
    const leaveHrs = val("sbLeaveHrs");
    const noticeWks = val("sbNoticeWks");

    const { aw, lv } = findSelectedAwardAndLevel();
    const eveMode = aw ? aw.eve_mode : "add";
    const isPerm = state.empType === "ft" || state.empType === "pt";
    const ftBase = lv ? lv.ft_base : state.empType === "casual" ? round2(mfR / 1.25) : mfR;

    const ordHrs = round2(mfH + satH + sunH + phH + (eveMode === "rate" ? ntH : 0));
    const otHrs = round2(ot1H + ot2H);
    const totalHrs = round2(ordHrs + otHrs);

    const oteGross = round2(mfH * mfR + satH * satR + sunH * sunR + phH * phR + ntH * ntR);
    const otGross = round2(ot1H * ot1R + ot2H * ot2R);
    const statGross = round2(oteGross + otGross);
    const wageShortfall = Math.max(0, round2(statGross - paid));
    const superReq = round2(oteGross * 0.12);
    const weeklyCombined = round2(wageShortfall + superReq);

    const leaveAmt = isPerm ? round2(leaveHrs * ftBase * 1.175) : 0;
    const noticeOrdHrs = Math.min(38, ordHrs || 38);
    const noticeAmt = isPerm ? round2(noticeWks * noticeOrdHrs * ftBase) : 0;
    const leaveNoticeTotal = round2(leaveAmt + noticeAmt);
    const noticeSuper = round2(noticeAmt * 0.12);

    const multiTotal = round2(weeklyCombined * weeks + leaveNoticeTotal + noticeSuper);
    state.lastCalculatedSummaryAmount = fmtAud(multiTotal);

    const empJotform = state.bootstrap?.hubs?.employment?.jotform_url || t("inquiryUrl");
    const isLitigationTier = multiTotal >= 50000;
    const awardTag = state.selectedAwardLabel || (state.lang === "en" ? "Custom Rates" : "직접 입력 시급");

    let feeNote = "";
    let guidanceBoxHtml = "";
    if (state.lang === "en") {
      if (multiTotal <= 10000) feeNote = "$310 Filing Fee (<$10k Small Claims · Form 5)";
      else if (multiTotal <= 50000) feeNote = "$500 Filing Fee ($10k–$50k Small Claims · Form 5)";
      else if (multiTotal <= 100000) feeNote = "$585 Filing Fee ($50k–$100k Small Claims · Form 5)";
      else feeNote = ">$100,000 Small-Claims Cap Exceeded · Federal Circuit / Federal Court General Track";

      state.lastCalculatedSummaryBlock = `Park & Co Self-Calculated Claim Summary | Award/Level: ${awardTag} | Weekly Statutory Gross: ${fmtAud(statGross)} (OTE ${fmtAud(oteGross)} + OT ${fmtAud(otGross)}) vs Paid: ${fmtAud(paid)} | Weekly Wage Shortfall: ${fmtAud(wageShortfall)} + 12% OTE Super: ${fmtAud(superReq)} × ${weeks} wks | Leave/Notice: ${fmtAud(leaveNoticeTotal)} => Total Projected Claim: ${fmtAud(multiTotal)}`;

      guidanceBoxHtml = isLitigationTier
        ? `<div class="gate-callout-box gate-retain">
             <strong style="display:block;color:#7A1F2B;margin-bottom:5px;">SOLICITOR INFLECTION POINT REACHED (≥$50,000 SCALE)</strong>
             <p style="margin:0 0 10px;font-size:13px;">At this claim size, formal legal strategy and s 550 director asset protection become economically viable. Complete the 208-Formula Excel (.xlsx) and attach it to our Employment Consultation Form:</p>
             <a href="${esc(empJotform)}" target="_blank" rel="noopener" class="btn-primary btn-sm">Open Employment Consultation Form ↗</a>
           </div>`
        : `<div class="gate-callout-box gate-diy">
             <strong style="display:block;color:#19583B;margin-bottom:5px;">COST-SAVING DIY ZONE (&lt;$50,000 · FWA s 570 NO-COSTS RULE)</strong>
             <p style="margin:0 0 8px;font-size:13px;">To protect 100% of your payout from legal fee erosion, send the 7-day statutory demand below and self-file FCFCOA Form 5 with our 208-Formula Excel. (If your matter also involves a 21-day visa dismissal or s 550 director claim, consult us below.)</p>
             <a href="${esc(empJotform)}" target="_blank" rel="noopener" class="btn-outline btn-sm">Involves s 550 / 21-Day Visa Dismissal? Consult Us ↗</a>
           </div>`;
    } else {
      if (multiTotal <= 10000) feeNote = "$310 ($10,000 미만 소액청구 · Form 5)";
      else if (multiTotal <= 50000) feeNote = "$500 ($10,000~$50,000 구간 · Form 5)";
      else if (multiTotal <= 100000) feeNote = "$585 ($50,000~$100,000 구간 · Form 5)";
      else feeNote = "$100,000 소액청구 한도 초과 · 일반 연방법원 소송 절차 대상";

      state.lastCalculatedSummaryBlock = `박앤코 임금 계산 결과 | 업종·직급: ${awardTag} | 1주일 법정 급여 ${fmtAud(statGross)} (일반근무 ${fmtAud(oteGross)} + 연장근무 ${fmtAud(otGross)} / 실제 수령 ${fmtAud(paid)}) | 1주일 덜 받은 월급 ${fmtAud(wageShortfall)} + 12% 연금 ${fmtAud(superReq)} × ${weeks}주 | 미지급 연차·해고예고 ${fmtAud(leaveNoticeTotal)} => 총 청구 예상 금액: ${fmtAud(multiTotal)}`;

      guidanceBoxHtml = isLitigationTier
        ? `<div class="gate-callout-box gate-retain">
             <strong style="display:block;color:#7A1F2B;margin-bottom:5px;">변호사 도움이 꼭 필요한 규모예요 (예상 청구액 $50,000 이상)</strong>
             <p style="margin:0 0 10px;font-size:13px;">이 정도 금액부터는 회사 폐업에 대비해 사장님 개인 재산까지 함께 청구(s 550)하는 등 변호사를 선임하는 것이 훨씬 유리해요. 자동계산 엑셀(.xlsx)을 채워서 아래 온라인 상담 질문지에 첨부해 주세요.</p>
             <a href="${esc(empJotform)}" target="_blank" rel="noopener" class="btn-primary btn-sm">고용법 온라인 상담 질문지 열기 ↗</a>
           </div>`
        : `<div class="gate-callout-box gate-diy">
             <strong style="display:block;color:#19583B;margin-bottom:5px;">혼자 진행해 내 돈을 지키는 구간이에요 ($50,000 미만 · 변호사비 보전 안 됨)</strong>
             <p style="margin:0 0 8px;font-size:13px;">변호사비로 내 몫이 깎이지 않도록 아래에서 7일 내 지급 요청서를 먼저 보내 보시고 안 주면 법원 소액청구(Form 5)로 직접 신청하시는 게 가장 이득이에요. 다만 비자가 걸린 해고(21일 마감)이거나 회사를 고의로 폐업시킨 사건(s 550)이라면 아래에서 바로 상담을 신청해 주세요.</p>
             <a href="${esc(empJotform)}" target="_blank" rel="noopener" class="btn-outline btn-sm">비자가 걸린 해고 · 고의 폐업(s 550) 상담 신청 ↗</a>
           </div>`;
    }

    const resEl = document.getElementById("sandboxResults");
    if (!resEl) return;

    resEl.innerHTML = `
      <div>
        <div class="sb-selected-pill num">${esc(awardTag)}</div>
        <div class="sb-metric-row">
          <span>${esc(t("sbTotalHours"))}</span>
          <strong class="num">${totalHrs} h${otHrs > 0 ? ` (OTE ${ordHrs}h + OT ${otHrs}h)` : ""}</strong>
        </div>
        <div class="sb-metric-row">
          <span>${esc(t("sbOteGross"))}</span>
          <strong class="num">${fmtAud(oteGross)}</strong>
        </div>
        ${
          otGross > 0
            ? `<div class="sb-metric-row">
                 <span>${esc(t("sbOtGross"))}</span>
                 <strong class="num">${fmtAud(otGross)}</strong>
               </div>`
            : ""
        }
        <div class="sb-metric-row">
          <span>${esc(t("sbStatutoryGross"))}</span>
          <strong class="num">${fmtAud(statGross)}</strong>
        </div>
        <div class="sb-metric-row">
          <span>${esc(t("sbActualGross"))}</span>
          <strong class="num">${fmtAud(paid)}</strong>
        </div>
        <div class="sb-metric-row">
          <span>${esc(t("sbWeeklyWageShortfall"))}</span>
          <strong class="num" style="color:#B23A2E;">${fmtAud(wageShortfall)}</strong>
        </div>
        <div class="sb-metric-row">
          <span>${esc(t("sbWeeklySuper"))}</span>
          <strong class="num" style="color:#1F5A5E;">${fmtAud(superReq)}</strong>
        </div>
        <div class="sb-metric-row">
          <span>${esc(t("sbLeaveNoticeAdd"))}</span>
          <strong class="num">${fmtAud(leaveNoticeTotal)}</strong>
        </div>
        <div class="sb-metric-row">
          <span><strong>${esc(t("sbCombinedWeekly"))}</strong></span>
          <strong class="num">${fmtAud(weeklyCombined)} / wk</strong>
        </div>
      </div>

      <div class="sb-metric-total">
        <span class="insp-box-label num">${weeks}${esc(t("sbMultiWeekPrefix"))}</span>
        <div class="sb-big-val num">${fmtAud(multiTotal)}</div>
        <div style="font-size:12.5px;margin-top:6px;font-weight:700;color:#1A1211;">
          ${esc(t("sbCourtFeeLabel"))}: <span class="num">${esc(feeNote)}</span>
        </div>
      </div>

      <button type="button" class="btn-outline btn-sm" id="sbCopySummaryBtn" style="width:100%;">${esc(t("copyCalcSummaryBtn"))}</button>
      ${guidanceBoxHtml}

      <div style="font-size:12px;color:#5A5654;line-height:1.5;margin-top:8px;">
        ${esc(t("sbNoteNonCompound"))}
      </div>
    `;

    document.getElementById("sbCopySummaryBtn")?.addEventListener("click", () => {
      copyText(state.lastCalculatedSummaryBlock, t("copiedCalcSummaryToast"));
    });

    if (typeof hubCtx.refreshPayslipDemand === "function") {
      hubCtx.refreshPayslipDemand();
    }
  }

  function renderWagesTab() {
    if (!state.bootstrap || !state.bootstrap.excel) return;
    const xl = state.bootstrap.excel;
    const dlTop = document.getElementById("wagesXlsxTopBtn");
    const dlBot = document.getElementById("wagesXlsxBottomBtn");
    if (dlTop) dlTop.href = xl.xlsx_download_url;
    if (dlBot) dlBot.href = xl.xlsx_download_url;

    const overline = document.getElementById("excelFormulaCountOverline");
    if (overline) {
      overline.textContent =
        state.lang === "en"
          ? `4-TAB WORKBOOK · ${xl.total_formulas} VERIFIED LIVE EXCEL FORMULAS`
          : `4개 시트 통합 · 총 ${xl.total_formulas}개 자동 계산 수식 내장`;
    }

    applyAwardPresetToInputs();
    renderExcelInspector();
  }

  function renderExcelInspector() {
    if (!state.bootstrap || !state.bootstrap.excel) return;
    const xl = state.bootstrap.excel;
    const sheets = xl.sheets || [];
    if (state.excelSheetIdx >= sheets.length) state.excelSheetIdx = 0;

    document.querySelectorAll("[data-excel-mode]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.excelMode === state.excelMode);
    });

    const tabsEl = document.getElementById("excelSheetTabs");
    const gridEl = document.getElementById("excelGridContainer");
    if (!tabsEl || !gridEl) return;

    tabsEl.innerHTML = sheets
      .map(
        (sh, idx) => `
        <button type="button" class="sheet-tab-btn ${idx === state.excelSheetIdx ? "active" : ""}" data-sheet-idx="${idx}">
          ${esc(sh.title)} <span class="num" style="opacity:0.75;font-size:11.5px;">(${sh.formula_count} ${esc(t("formulasBadgeSuffix"))})</span>
        </button>`
      )
      .join("");

    tabsEl.querySelectorAll("[data-sheet-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.excelSheetIdx = parseInt(btn.dataset.sheetIdx, 10) || 0;
        renderExcelInspector();
      });
    });

    const activeSheet = sheets[state.excelSheetIdx];
    if (!activeSheet) return;

    const rowsHtml = activeSheet.rows
      .map((rObj) => {
        const tds = rObj.cells
          .map((c) => {
            const styles = [];
            if (c.bg) styles.push(`background:${c.bg}`);
            if (c.fg) styles.push(`color:${c.fg}`);
            if (c.bold) styles.push("font-weight:700");
            const spanAttrs =
              (c.rspan > 1 ? ` rowspan="${c.rspan}"` : "") + (c.cspan > 1 ? ` colspan="${c.cspan}"` : "");

            let inner = esc(c.val);
            if (state.excelMode === "formulas" && c.formula) {
              inner = `<span class="xl-formula-pill" title="${esc(c.val)}">${esc(c.formula)}</span>`;
            }
            return `<td${spanAttrs} style="${styles.join(";")}" data-coord="${esc(c.coord)}">${inner}</td>`;
          })
          .join("");
        return `<tr><th class="xl-row-hdr num">${rObj.row}</th>${tds}</tr>`;
      })
      .join("");

    gridEl.innerHTML = `<table class="xl-table"><tbody>${rowsHtml}</tbody></table>`;
  }

  /* =========================================================================
     MULTIMEDIA STUDIO: 4 A4 PDFS · 12 SLIDES · 2 VIDEO BRIEFINGS
     ========================================================================= */
  function renderStudioTab() {
    if (!state.bootstrap) return;
    const pptxBtn = document.getElementById("pptxDownloadBtn");
    if (pptxBtn && state.bootstrap.slides) {
      pptxBtn.href = state.bootstrap.slides.pptx_download_url;
    }
    renderSlideFilmstrip();
    renderSlideStage();
    renderPdfViewer();
    renderShortsTheater();
  }

  function renderSlideFilmstrip() {
    const strip = document.getElementById("slideFilmstrip");
    if (!strip || !state.bootstrap || !state.bootstrap.slides) return;
    const slides = state.bootstrap.slides.slides || [];
    if (state.slideIdx >= slides.length) state.slideIdx = 0;

    strip.innerHTML = slides
      .map(
        (sl, i) => `
        <button type="button" class="slide-thumb-btn ${i === state.slideIdx ? "active" : ""}" data-slide-idx="${i}">
          <span class="slide-thumb-num num">${String(sl.index).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}</span>
          <span class="slide-thumb-title">${esc(sl.title)}</span>
        </button>`
      )
      .join("");

    strip.querySelectorAll("[data-slide-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.slideIdx = parseInt(btn.dataset.slideIdx, 10) || 0;
        renderSlideFilmstrip();
        renderSlideStage();
      });
    });
  }

  function renderSlideStage() {
    const stage = document.getElementById("slideStage");
    const counter = document.getElementById("slideCounterLabel");
    if (!stage || !state.bootstrap || !state.bootstrap.slides) return;
    const slides = state.bootstrap.slides.slides || [];
    const sl = slides[state.slideIdx];
    if (!sl) return;

    if (counter) {
      counter.textContent = `${String(sl.index).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }

    const stageW = stage.clientWidth || 960;
    const scale = Math.max(0.42, stageW / 960);

    stage.style.background = sl.bg || "#FCFAF6";

    stage.innerHTML = (sl.elements || [])
      .map((el) => {
        const pos = `left:${el.x}%;top:${el.y}%;width:${el.w}%;height:${el.h}%;`;
        if (el.kind === "image") {
          return `<img src="${esc(el.src)}" alt="" class="sl-el sl-el-img" style="${pos}">`;
        }
        if (el.kind === "table") {
          const tFont = Math.max(8.5, 10.5 * scale).toFixed(1);
          const trs = (el.rows || [])
            .map((row, rIdx) => {
              const cells = row
                .map((c) => {
                  const isHdr = rIdx === 0 || (c.bg && c.bg.toUpperCase() === "#1A1211");
                  const bg = c.bg || (rIdx === 0 ? "#1A1211" : "#FFFFFF");
                  const fg = isHdr ? "#FFFFFF" : "#1A1211";
                  const fw = isHdr ? "700" : "500";
                  return `<td style="background:${bg};color:${fg};font-weight:${fw};font-size:${tFont}px;">${esc(c.text)}</td>`;
                })
                .join("");
              return `<tr>${cells}</tr>`;
            })
            .join("");
          return `<div class="sl-el" style="${pos};height:auto;max-height:${100 - el.y - 5}%;overflow:auto;"><table class="sl-table"><tbody>${trs}</tbody></table></div>`;
        }

        const boxStyles = [pos];
        if (el.fill) boxStyles.push(`background:${el.fill}`);
        if (el.border) boxStyles.push(`border:1px solid ${el.border};border-radius:6px`);
        const pHtml = (el.paras || [])
          .map((p) => {
            const px = Math.max(8.5, p.pt * 1.18 * scale).toFixed(1);
            const fw = p.bold ? 800 : 500;
            const col = p.color || (sl.bg === "#1A1211" ? "#FFFFFF" : "#1A1211");
            return `<div style="font-size:${px}px;font-weight:${fw};color:${col};text-align:${p.align || "left"};line-height:1.38;margin-bottom:${Math.max(2, 4 * scale).toFixed(0)}px;">${esc(p.text)}</div>`;
          })
          .join("");
        return `<div class="sl-el" style="${boxStyles.join(";")}">${pHtml}</div>`;
      })
      .join("");
  }

  function renderPdfViewer() {
    const bar = document.getElementById("pdfSelectorBar");
    const grid = document.getElementById("pdfPagesGrid");
    const openBtn = document.getElementById("pdfOpenRawBtn");
    const dlBtn = document.getElementById("pdfDownloadBtn");
    if (!bar || !grid || !state.bootstrap) return;

    const pdfs = state.bootstrap.pdfs || [];
    const active = pdfs.find((p) => p.key === state.activePdfKey) || pdfs[0];
    if (!active) return;
    state.activePdfKey = active.key;

    if (openBtn) openBtn.href = active.open_url;
    if (dlBtn) dlBtn.href = active.download_url;

    bar.innerHTML = pdfs
      .map(
        (p) => `
        <button type="button" class="pdf-select-card ${p.key === active.key ? "active" : ""}" data-pdf-key="${esc(p.key)}">
          <span class="doc-nav-badge num">${esc(p.badge)}</span>
          <strong style="display:block;font-size:14px;margin-bottom:4px;color:#1A1211;">${esc(p.title)}</strong>
          <span style="font-size:12.5px;color:#5A5654;">${esc(p.subtitle)}</span>
        </button>`
      )
      .join("");

    bar.querySelectorAll("[data-pdf-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activePdfKey = btn.dataset.pdfKey;
        renderPdfViewer();
      });
    });

    grid.innerHTML = (active.pages || [])
      .map(
        (imgUrl, idx) => `
        <div class="pdf-page-frame">
          <a href="${esc(active.open_url)}#page=${idx + 1}" target="_blank" rel="noopener">
            <img src="${esc(imgUrl)}" alt="${esc(active.title)} - ${esc(t("pageWord"))} ${idx + 1}">
          </a>
          <div class="pdf-page-caption num">
            <span>${esc(active.badge)}</span>
            <span>${esc(t("pageWord"))} ${idx + 1} / ${active.pages.length}</span>
          </div>
        </div>`
      )
      .join("");
  }

  function renderShortsTheater() {
    const grid = document.getElementById("shortsTheaterGrid");
    if (!grid || !state.bootstrap) return;
    const shorts = state.bootstrap.shorts || [];

    grid.innerHTML = shorts
      .map(
        (s) => `
        <div class="shorts-card">
          <div class="shorts-phone-frame">
            <video controls preload="metadata" playsinline src="${esc(s.stream_url)}"></video>
          </div>
          <div>
            <span class="pilot-pill num">${esc(s.badge)}</span>
            <h3 class="shorts-meta-title">${esc(s.title)}</h3>
            <p class="shorts-meta-sub">${esc(s.subtitle)}</p>
            <a href="${esc(s.download_url)}" download class="btn-primary btn-sm">${esc(t("downloadMp4Btn"))}</a>
          </div>
        </div>`
      )
      .join("");
  }

  /* =========================================================================
     ALL 36 VERIFIED PUBLIC CLIENT DELIVERABLES LIBRARY
     ========================================================================= */
  function renderVaultFilters() {
    const edGroup = document.getElementById("vaultEditionFilter");
    const fmtGroup = document.getElementById("vaultFormatFilter");
    if (!edGroup || !fmtGroup) return;

    const editions = [
      ["all", t("edAll")],
      ["KO", t("edKo")],
      ["EN", t("edEn")],
    ];
    edGroup.innerHTML = editions
      .map(
        ([v, lbl]) =>
          `<button type="button" class="filter-pill ${state.vaultEdition === v ? "active" : ""}" data-vault-ed="${v}">${esc(lbl)}</button>`
      )
      .join("");

    const formats = [
      ["all", t("fmtAll")],
      ["Markdown", "Markdown"],
      ["Word (.docx)", "Word"],
      ["PDF", "PDF"],
      ["Slides (.pptx)", "Slides"],
      ["Shorts (.mp4)", "Shorts"],
      ["Excel (.xlsx)", "Excel"],
    ];
    fmtGroup.innerHTML = formats
      .map(
        ([v, lbl]) =>
          `<button type="button" class="filter-pill ${state.vaultFormat === v ? "active" : ""}" data-vault-fmt="${esc(v)}">${esc(lbl)}</button>`
      )
      .join("");

    edGroup.querySelectorAll("[data-vault-ed]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.vaultEdition = btn.dataset.vaultEd;
        renderVaultFilters();
        renderVaultTable();
      });
    });
    fmtGroup.querySelectorAll("[data-vault-fmt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.vaultFormat = btn.dataset.vaultFmt;
        renderVaultFilters();
        renderVaultTable();
      });
    });
  }

  function renderVaultTable() {
    const tbody = document.getElementById("vaultTableBody");
    if (!tbody || !state.bootstrap) return;

    const rows = (state.bootstrap.vault || []).filter((item) => {
      const okEd = state.vaultEdition === "all" || item.edition === state.vaultEdition;
      const okFmt = state.vaultFormat === "all" || item.format === state.vaultFormat;
      return okEd && okFmt;
    });

    tbody.innerHTML = rows
      .map(
        (item, idx) => `
        <tr>
          <td><span class="ed-badge ed-${esc(item.edition)} num">${esc(item.edition)}</span></td>
          <td><span class="fmt-badge num">${esc(item.format)}</span></td>
          <td>
            <strong>${esc(item.label)}</strong>
            <span class="vault-rel-path num">${esc(item.rel_path)}</span>
          </td>
          <td class="num">${esc(item.size_label)}</td>
          <td><span class="hash-chip num">${esc(item.sha256_short)}</span></td>
          <td>
            <div class="vault-actions-cell">
              <button type="button" class="btn-outline btn-sm" data-vault-preview="${idx}">${esc(t("previewInPortalBtn"))}</button>
              <a href="${esc(item.download_url)}" download class="btn-primary btn-sm">${esc(t("downloadFileBtn"))}</a>
            </div>
          </td>
        </tr>`
      )
      .join("");

    tbody.querySelectorAll("[data-vault-preview]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const item = rows[parseInt(btn.dataset.vaultPreview, 10)];
        if (!item) return;
        const targetLang = item.edition === "EN" ? "en" : "ko";
        if (targetLang !== state.lang) {
          await loadLanguageBootstrap(targetLang);
        }
        const pt = item.preview_target || "";
        if (["00_master", "01_immi", "02_emp", "03_fam"].includes(pt)) {
          state.activeDocId = pt;
          switchTab("reader");
        } else if (
          pt.startsWith("master_") ||
          pt.startsWith("immi_") ||
          pt.startsWith("wages_") ||
          pt.startsWith("family_")
        ) {
          state.activePdfKey = pt;
          renderPdfViewer();
          switchTab("studio", { scrollTop: false });
          setTimeout(() => document.getElementById("pdfSection")?.scrollIntoView({ behavior: "smooth" }), 60);
        } else if (pt.startsWith("slides_")) {
          switchTab("studio", { scrollTop: false });
          setTimeout(() => document.getElementById("slidesSection")?.scrollIntoView({ behavior: "smooth" }), 60);
        } else if (pt.startsWith("shorts_")) {
          switchTab("studio", { scrollTop: false });
          setTimeout(() => document.getElementById("shortsSection")?.scrollIntoView({ behavior: "smooth" }), 60);
        } else if (pt.startsWith("excel_")) {
          switchTab("employment", { scrollTop: false });
          setTimeout(() => document.querySelector(".excel-inspector-shell")?.scrollIntoView({ behavior: "smooth" }), 60);
        }
      });
    });
  }

  /* =========================================================================
     GLOBAL EVENT WIRING & INITIALIZATION
     ========================================================================= */
  function initEvents() {
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    document.getElementById("brandHomeBtn")?.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("selfhelp");
    });

    document.querySelectorAll("[data-jump-tab]").forEach((chip) => {
      chip.addEventListener("click", () => switchTab(chip.dataset.jumpTab));
    });

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextLang = btn.dataset.setLang;
        if (nextLang !== state.lang) {
          loadLanguageBootstrap(nextLang);
        }
      });
    });

    document.getElementById("sbAwardSelect")?.addEventListener("change", (e) => {
      const code = e.target.value;
      state.empAwardCode = code;
      if (code === "custom") {
        state.empPresetId = "custom";
      } else {
        const awards = state.bootstrap?.hubs?.awards_bundle?.awards || [];
        const aw = awards.find((a) => a.award_code === code);
        if (aw && aw.levels && aw.levels.length) {
          state.empPresetId = aw.levels[0].id;
        }
      }
      if (typeof hubCtx.syncAwardSelectControls === "function") {
        hubCtx.syncAwardSelectControls();
      }
      applyAwardPresetToInputs();
    });

    document.getElementById("sbLevelSelect")?.addEventListener("change", (e) => {
      state.empPresetId = e.target.value;
      applyAwardPresetToInputs();
    });

    document.querySelectorAll("[data-emp-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.empType = btn.dataset.empType;
        document.querySelectorAll("[data-emp-type]").forEach((b) =>
          b.classList.toggle("active", b.dataset.empType === state.empType)
        );
        if (typeof hubCtx.syncAwardSelectControls === "function") {
          hubCtx.syncAwardSelectControls();
        }
        applyAwardPresetToInputs();
      });
    });

    [
      "sbMonFriHrs", "sbMonFriRate", "sbSatHrs", "sbSatRate",
      "sbSunHrs", "sbSunRate", "sbPhHrs", "sbPhRate",
      "sbNightHrs", "sbNightRate", "sbOt1Hrs", "sbOt1Rate",
      "sbOt2Hrs", "sbOt2Rate", "sbActualPaid", "sbWeeks",
      "sbLeaveHrs", "sbNoticeWks",
    ].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", recalcSandbox);
    });

    document.getElementById("sandboxResetBtn")?.addEventListener("click", () => {
      state.empSector = "all";
      state.empAwardCode = "MA000119";
      state.empPresetId = "ma000119_lv2";
      state.empType = "casual";
      document.querySelectorAll("[data-emp-type]").forEach((b) =>
        b.classList.toggle("active", b.dataset.empType === "casual")
      );
      if (typeof hubCtx.syncAwardSelectControls === "function") {
        hubCtx.syncAwardSelectControls();
      }
      const defaults = {
        sbMonFriHrs: 15, sbMonFriRate: 33.85,
        sbSatHrs: 8, sbSatRate: 40.62,
        sbSunHrs: 7, sbSunRate: 40.62,
        sbPhHrs: 0, sbPhRate: 67.70,
        sbNightHrs: 0, sbNightRate: 2.95,
        sbOt1Hrs: 0, sbOt1Rate: 40.62,
        sbOt2Hrs: 0, sbOt2Rate: 54.16,
        sbActualPaid: 750, sbWeeks: 26,
        sbLeaveHrs: 0, sbNoticeWks: 0,
      };
      Object.entries(defaults).forEach(([k, v]) => {
        const el = document.getElementById(k);
        if (el) el.value = v;
      });
      applyAwardPresetToInputs();
    });

    document.getElementById("wagesOpenManualBtn")?.addEventListener("click", () => {
      state.activeDocId = "02_emp";
      switchTab("reader");
    });

    document.querySelectorAll("[data-excel-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.excelMode = btn.dataset.excelMode;
        renderExcelInspector();
      });
    });

    document.querySelectorAll("[data-studio-jump]").forEach((pill) => {
      pill.addEventListener("click", () => {
        document.querySelectorAll("[data-studio-jump]").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        document.getElementById(pill.dataset.studioJump)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    document.getElementById("slidePrevBtn")?.addEventListener("click", () => {
      const total = state.bootstrap?.slides?.slides?.length || 12;
      state.slideIdx = (state.slideIdx - 1 + total) % total;
      renderSlideFilmstrip();
      renderSlideStage();
    });
    document.getElementById("slideNextBtn")?.addEventListener("click", () => {
      const total = state.bootstrap?.slides?.slides?.length || 12;
      state.slideIdx = (state.slideIdx + 1) % total;
      renderSlideFilmstrip();
      renderSlideStage();
    });

    window.addEventListener("keydown", (e) => {
      if (state.activeTab !== "studio") return;
      if (e.target && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
      const total = state.bootstrap?.slides?.slides?.length || 12;
      if (e.key === "ArrowLeft") {
        state.slideIdx = (state.slideIdx - 1 + total) % total;
        renderSlideFilmstrip();
        renderSlideStage();
      } else if (e.key === "ArrowRight") {
        state.slideIdx = (state.slideIdx + 1) % total;
        renderSlideFilmstrip();
        renderSlideStage();
      }
    });

    const stageEl = document.getElementById("slideStage");
    if (stageEl && "ResizeObserver" in window) {
      const ro = new ResizeObserver(() => {
        if (state.activeTab === "studio") renderSlideStage();
      });
      ro.observe(stageEl);
    }

    document.getElementById("copyOfficialEmailBtn")?.addEventListener("click", () => {
      copyText(t("inquiryUrl"), t("copiedAddrToast"));
    });

    wireReaderSearch();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initEvents();
    loadLanguageBootstrap(state.lang);
  });
})();
