/* Park & Co Lawyers · Public Self-Help Wizard, Cost-Protection Matrix & Practice Hubs
   Strictly enforces 0% Hangul in EN mode (?lang=en) and 100% client-first framing. */
(() => {
  "use strict";

  const HUB_STRINGS = {
    ko: {
      cmDiyKicker: "1단계 · 혼자 해결하면 변호사비를 아끼는 단계",
      cmInflectKicker: "2단계 · 혼자 진행을 멈추고 박앤코 변호사를 찾아야 할 순간",
      cmRiskKicker: "유의 사항 · 법정 기한 도과 시 발생하는 불이익",

      pracAll: "전체 보기 (13)",
      pracEmp: "월급·직장 문제 (5)",
      pracFam: "이혼·재산·자녀 (4)",
      pracImmi: "비자·영주권 (4)",
      whyHeading: "이 경로가 실수령액 보전에 유리한 이유",
      stepsHeading: "단계별 진행 절차",
      empPresetCustom: "직접 입력 · 계약서 시급을 내가 직접 적어 넣기",
      jumpDirBtn: "25개 업종 · 129개 직급 전체 시급표 보기 ↓",
      jumpDisambBtn: "헷갈리기 쉬운 업종 구분 & 주의할 판례 (4가지) ↓",
      quickSearchEmpty: "일치하는 직무가 검색되지 않습니다. 한식당·바리스타·타일·정육·청소·필라테스·NDIS 등 핵심 직종명으로 다시 입력해 주십시오.",
      quickLoadBtn: "이 시급 넣기",
      customModeTitle: "내 시급 직접 입력하기",
      customModeDesc: "근로계약서상 약정 시급이나 기업별 단체협약(Enterprise Agreement) 시급을 아래 입력칸에 직접 기입하여 산정합니다.",
      lblTypicalJobs: "주요 담당 업무 및 직종",
      lblClassRule: "이 직급에 해당하는 기준 (경력·자격증)",
      lblAllowances: "따로 챙겨야 할 수당",
      lblOtRule: "연장근무(오버타임) 시급 기준",
      lblTrapAlert: "사장님과 가장 자주 다투는 부분 & 법원 판례",
      openPayGuideBtn: "호주 정부 공식 시급표(PDF) ↗",
      openFwcAwardBtn: "업종 규정 원문 보기 ↗",
      disambOverline: "COVERAGE BOUNDARIES · FWA s 15AA · FEDERAL COURT & FWC PRECEDENTS",
      disambTitle: "업종별 시급표(Modern Award) 적용 경계 및 필수 판례 기준 4가지",
      dirOverline: "COMPLETE EMPIRICAL DIRECTORY · 25 INSTRUMENTS & 129 CLASSIFICATIONS (FY 2026–27)",
      dirTitle: "한인들이 많이 일하는 25개 업종 · 129개 직급 공식 시급표 (버튼 한 번으로 계산기에 넣기)",
      dirSub: "아래에서 업종이나 직무를 선택한 뒤 '계산기에 넣기 ↑' 버튼을 누르면 평일·주말·야간·연장근무 법정 시급이 상단 계산기에 자동 반영됩니다.",
      dirSearchPh: "업종·직무 검색하기 (예: 한식당, 요리사, 바리스타, 타일, 정육, 농장, 청소, 필라테스, NDIS, 치과, 어린이집, 물류...)",
      dirExpandAll: "모두 펼치기",
      dirCollapseAll: "모두 접기",
      dirThLevel: "직급 · 하는 일 · 자격 기준",
      dirThFt: "정규직 시급 (평일 / 토 / 일 / 공휴일)",
      dirThCas: "캐주얼 25% 시급 (평일 / 토 / 일 / 공휴일)",
      dirThEveOt: "저녁·야간 / 연장근무 시급",
      dirThAction: "계산기에 넣기",
      dirLoadBtn: "계산기에 넣기 ↑",
      dirLoadedToast: "선택하신 업종과 직급의 법정 시급이 계산기에 반영되었습니다.",
      dirPtNotePrefix: "파트타임 전용 시급(+15% 별도 적용): ",

      // Employment Payslip & Regulator Cards
      payslipOverline: "FWA ss 535–536 & reg 3.46 · s 557C REVERSE ONUS",
      payslipTitle: "급여명세서(Payslip) 법령 위반 점검 & 7일 정식 지급 요구서(Letter of Demand) 작성기",
      payslipSub: "위반 항목과 당사자 정보를 입력하면 호주 고용주에게 즉시 송달할 수 있는 정식 영문 지급 요구서(Fair Work Act ss 535-536 · s 557C 근거)와 한국어 대조 참조본이 생성됩니다.",
      lblWorkerName: "근로자 성명 (영문 표기 권장)",
      phWorkerName: "예: Gil Dong Hong",
      lblEmployerName: "고용주 정식 법인명 (Pty Ltd / ABN)",
      phEmployerName: "예: ABC Hospitality Pty Ltd (ABN 12 345 678 901)",
      lblWorkPeriod: "재직 기간",
      phWorkPeriod: "예: 1 October 2025 - 30 June 2026",
      lblManualAward: "적용 어워드·직급 직접 기재 (선택)",
      phManualAward: "미입력 시 별첨 정산표 기준으로 표기",
      lblManualAmount: "청구 금액 직접 기재 (선택)",
      phManualAmount: "예: $4,850.00 (미입력 시 별첨 정산표 기준)",
      lblImportCalc: "상단 계산기에서 직접 산정한 업종·청구 금액을 요구서에 반영하기",
      hintCalcNotRun: "초기 예시 수치는 요구서에 자동 삽입되지 않습니다. 상단 계산기에서 본인 근무시간·시급을 먼저 입력하시면 이 체크박스가 활성화됩니다.",
      hintCalcReady: "직접 산정 완료: 체크박스를 선택하시면 계산 결과({award} · {amount})가 요구서에 반영됩니다.",
      hintCalcImported: "반영 완료: 직접 산정하신 내역({award} · {amount})이 요구서 본문에 기재되었습니다.",
      copyEnDemandBtn: "고용주 발송용 영문 서한만 복사하기",
      copiedEnDemandToast: "호주 고용주 발송용 정식 영문 지급 요구서(Letter of Demand)가 복사되었습니다.",
      copyDemandBtn: "영문 서한 + 한국어 참조본 전체 복사",
      copiedDemandToast: "영문 정식 지급 요구서와 한국어 대조 참조본 전체가 복사되었습니다.",

      regOverline: "FREE GOVERNMENT REGULATORS · STATUTORY INVESTIGATION & PENALTY POWERS",
      regTitle: "사업장 근로감독·과태료 부과·미납 연금 추징은 호주 정부 기관에 무료로 신고하십시오",
      regSub: "민간 로펌이나 변호사에게는 사업장 강제 조사나 행정 과태료 부과 권한이 없습니다. 법적 제재나 국세청 직권 연금 추징이 목적이라면 별도 수임료 지출 없이 아래 호주 정부 감독기관에 직접 신고하시기 바랍니다.",
      openAgencyBtn: "정부 무료 신고 페이지 열기 ↗",

      empBlogsOverline: "CURATED EMPLOYMENT LAW GUIDES & CASE COLUMNS",
      empBlogsTitle: "밀린 월급 받기 · 해고 후 21일 대처 · 페이슬립 권리 핵심 칼럼 모음",
      readBlogCta: "칼럼 전문 보기 ↗",
      readColumnCta: "판례 분석 읽기 →",

      // Family Hub
      famHeroKicker: "AUSTRALIAN FAMILY LAW · s 48 NO-FAULT SYSTEM & SETTLEMENT GUIDE",
      famHeroTitle: "유책 공방으로 재산을 소진하기보다 법원 합의명령과 재산 공개 확보에 집중하십시오",
      famHeroDesc: "호주 가족법(s 48)은 배우자의 외도나 귀책사유를 따져 위자료를 산정하지 않습니다. 따라서 유책 공방이 길어질수록 분할 대상 순자산만 법률 비용으로 소진됩니다. 단순 온라인 이혼과 초기 양육 조정은 아래 요약 및 03번 설명서로 직접 진행하실 수 있으며 합의 내용을 법원 합의명령(Consent Orders)으로 확정하거나 비협조 배우자의 은닉 재산 공개를 청구해야 할 때 법무법인 박앤코에 문의하시기 바랍니다.",
      dlFamPdfBtn: "03번 가족법 요약 PDF 받기",
      readFamCookbookBtn: "03번 가족법 설명서 전체 읽기",
      openFamJotformHeroBtn: "가족법 온라인 상담 질문지 작성 ↗",

      famTracksOverline: "WHEN LEGAL REPRESENTATION PROTECTS YOUR EQUITY · 2 KEY INFLECTION POINTS",
      famTracksTitle: "호주 이혼·재산분할에서 변호사를 선임하는 것이 순자산을 지켜 주는 두 가지 시점",
      famChecklistOverline: "PRE-CONSULTATION READINESS CHECK · FASTER & MORE ACCURATE ADVICE",
      famChecklistTitle: "가족법 상담 신청 전 30초 준비 사항 점검",
      famChecklistSub: "아래 세 가지 항목을 미리 정리해 두시면 초기 법률 검토 단계에서 보다 신속하고 정확하게 분할 기준과 대응 절차를 안내받으실 수 있습니다.",
      famJotformCtaBtn: "가족법 온라인 상담 질문지 열기 ↗",
      famBlogsOverline: "CURATED FAMILY LAW DEEP-DIVE COLUMNS",
      famBlogsTitle: "부모님 지원금 · 가족신탁 · 합의명령 · 파트너비자 결별 실제 판례 분석",

      // Immigration Hub
      immiHeroKicker: "STEP #1 FREE SELF-CHECK · 714 OCCUPATIONS, CV MATCHING & PR POINTS",
      immiHeroTitle: "본인 경력에 맞는 호주 비자·영주권 경로, 유료 상담 전 무료 도구로 먼저 점검하십시오",
      immiHeroDesc: "초기 비자 경로 탐색 단계부터 유료 상담 비용을 지출하실 필요가 없습니다. 법무법인 박앤코가 무료로 공개한 비자 솔루션 가이드에서 714개 직업군과 세부 직무 조건(Caveat)을 먼저 확인하시기 바랍니다. 브라우저 내에서 서버 저장 없이 안전하게 이력서(CV)를 대조하고 영주권 점수 계산기와 전문변호사 브리핑 자료를 한자리에서 살펴보실 수 있습니다.",
      openVisaGuideBtn: "무료 호주 비자 솔루션 가이드 열기 ↗",
      dlImmiPdfBtn: "01번 이민 서류 요약 PDF 받기",
      readImmiCookbookBtn: "01번 이민 설명서 전체 읽기",

      immiEscOverline: "QLS ACCREDITED SPECIALIST · CRITICAL LEGAL INFLECTION POINTS",
      immiEscTitle: "단 하루의 기한 도과나 서류 오기재가 치명적인 변곡점에서는 즉시 전문변호사와 상의하십시오",
      immiBlogsOverline: "CURATED IMMIGRATION COLUMNS · AUSSIELIFE.ORG & PARK & CO",
      immiBlogsTitle: "2026–27 스폰서 연봉($79,423) · 비자 거절 · 행정재심기구(ART) 실제 판례 분석",
    },

    en: {
      cmDiyKicker: "STAGE 1 · WHY START WITH DIY (PROTECT NET RECOVERY)",
      cmInflectKicker: "STAGE 2 · WHEN TO CONSULT PARK & CO LAWYERS (INFLECTION POINT)",
      cmRiskKicker: "REALISTIC COST & STATUTORY DEADLINE RISK",

      pracAll: "All Practices (13)",
      pracEmp: "Employment (5)",
      pracFam: "Family Law (4)",
      pracImmi: "Immigration (4)",
      whyHeading: "Why This Pathway Best Protects Your Net Outcome",
      stepsHeading: "Immediate Step-by-Step Action Checklist",
      empPresetCustom: "Custom · Manual Hourly Rates Entry",
      jumpDirBtn: "Browse All 25 Awards & 129 Classifications ↓",
      jumpDisambBtn: "Coverage Boundaries & Case-Law Alerts (4) ↓",
      quickSearchEmpty: "No matching classification found. Try terms like barista, Cert III, tiler, boner, NDIS, Pilates, or dental.",
      quickLoadBtn: "Load",
      customModeTitle: "Custom Manual Hourly Rates Mode",
      customModeDesc: "Enter contractual or Enterprise Agreement hourly rates manually in the calculator fields below.",
      lblTypicalJobs: "Common Roles & Occupations",
      lblClassRule: "Schedule A/B Classification & Qualification Floor",
      lblAllowances: "Key Statutory Allowances",
      lblOtRule: "Overtime Multiplier Rule",
      lblTrapAlert: "Key Audit Issue & Federal Court / FWC Authority",
      openPayGuideBtn: "Official FWO Pay Guide (PDF) ↗",
      openFwcAwardBtn: "FWC Consolidated Award ↗",
      disambOverline: "COVERAGE BOUNDARIES · FWA s 15AA · FEDERAL COURT & FWC PRECEDENTS",
      disambTitle: "Workplace Award Coverage Boundaries & 4 Essential Case-Law Guides",
      dirOverline: "COMPLETE EMPIRICAL DIRECTORY · 25 INSTRUMENTS & 129 CLASSIFICATIONS (FY 2026–27)",
      dirTitle: "Master FY 2026–27 Modern Award & Classification Explorer (1-Click Calculator Sync)",
      dirSub: "Filter by industry sector or search any role/qualification below, then click 'Load in Calculator ↑' to populate exact FT, PT, Casual, Shift, and Overtime rates.",
      dirSearchPh: "Search 25 awards & 129 levels (e.g. restaurant, Cook, Cert III, tiler, boner, farm, cleaning, Pilates, NDIS, dental, childcare, welder...)",
      dirExpandAll: "Expand All",
      dirCollapseAll: "Collapse All",
      dirThLevel: "Classification · Typical Roles · Duty Floor",
      dirThFt: "Full-Time FT (M–F / Sat / Sun / PH)",
      dirThCas: "Casual 25% (M–F / Sat / Sun / PH)",
      dirThEveOt: "Evening/Shift & Overtime (OT1 · OT2)",
      dirThAction: "Calculator",
      dirLoadBtn: "Load in Calculator ↑",
      dirLoadedToast: "Selected Modern Award and Classification rates loaded into calculator.",
      dirPtNotePrefix: "Dedicated Part-Time (+15%) Rates: ",

      payslipOverline: "FWA ss 535–536 & reg 3.46 · s 557C REVERSE ONUS",
      payslipTitle: "Payslip Compliance Check & 7-Day Statutory Letter of Demand Generator",
      payslipSub: "Tick the relevant issues below and enter employer details to generate a formal 7-day demand citing FWA ss 535–536 and the s 557C reverse onus of proof.",
      lblWorkerName: "Employee Full Name",
      phWorkerName: "e.g. Jane Citizen",
      lblEmployerName: "Employer Legal Entity (Pty Ltd / ABN)",
      phEmployerName: "e.g. ABC Hospitality Pty Ltd (ABN 12 345 678 901)",
      lblWorkPeriod: "Employment Period",
      phWorkPeriod: "e.g. 1 October 2025 – 30 June 2026",
      lblManualAward: "Applicable Award / Classification (Optional)",
      phManualAward: "Leave blank to cite attached Schedule of Underpayment",
      lblManualAmount: "Claimed Shortfall Amount (Optional)",
      phManualAmount: "e.g. $4,850.00 (or leave blank for Schedule)",
      lblImportCalc: "Import my calculated Award & shortfall from the calculator above",
      hintCalcNotRun: "Default example figures are never inserted automatically. Adjust your hours or award in the calculator above first if you wish to import them here.",
      hintCalcReady: "Calculation ready: tick the box above to insert your calculated figure ({award} · {amount}) into this demand letter.",
      hintCalcImported: "Imported: your calculated figure ({award} · {amount}) is now included in the formal demand letter.",
      copyEnDemandBtn: "Copy Formal 7-Day Letter of Demand",
      copiedEnDemandToast: "Formal 7-day statutory Letter of Demand copied to clipboard.",
      copyDemandBtn: "Copy Formal 7-Day Letter of Demand",
      copiedDemandToast: "Formal 7-day statutory Letter of Demand copied to clipboard.",

      regOverline: "FREE GOVERNMENT REGULATORS · STATUTORY INVESTIGATION & PENALTY POWERS",
      regTitle: "Need Workplace Audits, Statutory Penalties or Unpaid Super Enforcement? Report Free to Regulators",
      regSub: "Private law firms do not hold criminal, tax, or regulatory prosecution powers. Where administrative investigation or statutory fines are your objective, save private legal fees and report directly to the government agencies below at zero cost.",
      openAgencyBtn: "Open Official Regulator Portal ↗",

      empBlogsOverline: "CURATED EMPLOYMENT LAW GUIDES & CASE COLUMNS",
      empBlogsTitle: "Essential Reading: Unpaid Wages, 21-Day Dismissal Limits & Workplace Rights",
      readBlogCta: "Read Full Article ↗",
      readColumnCta: "Read Full Column →",

      famHeroKicker: "AUSTRALIAN FAMILY LAW · s 48 NO-FAULT SYSTEM & SETTLEMENT GUIDE",
      famHeroTitle: "Avoid Costly Fault Battles: Protect Your Equity With Enforceable Settlement & Disclosure",
      famHeroDesc: "Australia's No-Fault system (s 48) does not award moral damages for infidelity, meaning drawn-out fault arguments only erode your family's net equity. Review the 3 core pillars and Manual 03 PDF below for DIY divorce and initial parenting steps, and consult Park & Co when you reach broad agreement ready for Court Consent Orders or need formal solicitor intervention to compel financial disclosure from a silent ex-partner.",
      dlFamPdfBtn: "Download 03 Family Law A4 PDF",
      readFamCookbookBtn: "Read Full Manual 03 in Browser",
      openFamJotformHeroBtn: "Open Family Law Consultation Form ↗",

      famTracksOverline: "WHEN LEGAL REPRESENTATION PROTECTS YOUR EQUITY · 2 KEY INFLECTION POINTS",
      famTracksTitle: "Two Family Law Inflection Points Where Solicitor Representation Protects Your Financial Future",
      famChecklistOverline: "PRE-CONSULTATION READINESS CHECK · FASTER & CLEARER ASSESSMENT",
      famChecklistTitle: "30-Second Pre-Consultation Readiness Checklist",
      famChecklistSub: "Reviewing the items below before submitting your online consultation summary helps our solicitors assess your matter accurately from day one.",
      famJotformCtaBtn: "Open Family Law Consultation Form ↗",
      famBlogsOverline: "CURATED FAMILY LAW DEEP-DIVE COLUMNS",
      famBlogsTitle: "Recommended Columns on Australian Family Law, Consent Orders & Partner Visas",

      immiHeroKicker: "STEP #1 FREE SELF-CHECK · 714 OCCUPATIONS, CV MATCHING & PR POINTS",
      immiHeroTitle: "Exploring Your Australian Visa or PR Options? Start Free With Our Visa Solution Guide",
      immiHeroDesc: "Before spending money on legal fees, map out your realistic visa options at zero cost. Search 714 skilled occupations and caveats, match your CV locally in your browser without server uploads, calculate exact Schedule 6D PR points, and watch 48 Specialist briefings.",
      openVisaGuideBtn: "Launch Australian Visa Solution Guide ↗",
      dlImmiPdfBtn: "Download 01 Immigration A4 PDF",
      readImmiCookbookBtn: "Read Full Manual 01 in Browser",

      immiEscOverline: "QLS ACCREDITED SPECIALIST · CRITICAL LEGAL INFLECTION POINTS",
      immiEscTitle: "High-Stakes Inflection Points Where Immediate Specialist Representation Is Essential",
      immiBlogsOverline: "CURATED IMMIGRATION COLUMNS · PARK & CO LAWYERS",
      immiBlogsTitle: "Essential Briefings: 2026–27 CSIT ($79,423), Sponsorships & Visa Appeals",
    },
  };

  function hs(lang, key) {
    const lg = lang === "en" ? "en" : "ko";
    return (HUB_STRINGS[lg] && HUB_STRINGS[lg][key]) || key;
  }

  function renderBlogGrid(blogs, lang, overline, title, extraLink) {
    if (!blogs || !blogs.length) return "";
    const esc = window.ParkCoPortal.esc;
    const hdrBtn =
      extraLink && extraLink.url
        ? `<a href="${esc(extraLink.url)}" target="_blank" rel="noopener" class="btn-outline" style="white-space:nowrap;">${esc(extraLink.label)}</a>`
        : "";
    return `
      <div class="section-header-row" style="margin-bottom:10px;">
        <div>
          <span class="section-overline num">${esc(overline)}</span>
          <h3 class="section-title-sm">${esc(title)}</h3>
        </div>
        ${hdrBtn}
      </div>
      <div class="blog-cards-grid">
        ${blogs
          .map((b) => {
            const urlStr = b.url || "";
            const isInternal = urlStr.startsWith("./") || urlStr.startsWith("/");
            const targetAttr = isInternal ? "" : ' target="_blank" rel="noopener"';
            const ctaLbl = isInternal ? hs(lang, "readColumnCta") : hs(lang, "readBlogCta");
            const thumbHtml = b.hero_img
              ? `<div class="blog-card-thumb-wrap"><img src="${esc(b.hero_img)}" alt="${esc(b.title)}" class="blog-card-thumb" loading="lazy"></div>`
              : "";
            const descHtml = b.desc ? `<p class="blog-desc">${esc(b.desc)}</p>` : "";
            const metaHtml = b.read_time ? `<span class="blog-read-meta num">${esc(b.read_time)}</span>` : `<span></span>`;
            return `
          <a href="${esc(urlStr)}"${targetAttr} class="blog-link-card${b.hero_img ? " has-thumb" : ""}">
            <div>
              ${thumbHtml}
              <span class="blog-tag num">${esc(b.tag)}</span>
              <div class="blog-title">${esc(b.title)}</div>
              ${descHtml}
            </div>
            <div class="blog-card-foot">
              ${metaHtml}
              <span class="num" style="font-size:12.5px;font-weight:700;color:#0E3A3E;">${esc(ctaLbl)}</span>
            </div>
          </a>`;
          })
          .join("")}
      </div>`;
  }

  /* 0. 3-PRACTICE COST-PROTECTION & INFLECTION-POINT MATRIX */
  function renderCostMatrix(ctx) {
    const { state, esc, handleActionToken } = ctx;
    const root = document.getElementById("costMatrixRoot");
    const cards = state.bootstrap?.hubs?.cost_matrix || [];
    if (!root || !cards.length) return;

    root.innerHTML = cards
      .map((c) => {
        const actionToken = c.jump_doc ? `doc:${c.jump_doc}` : `tab:${c.jump_tab}`;
        return `
        <article class="cost-matrix-card" data-practice="${esc(c.practice)}">
          <div>
            <span class="pilot-pill num">${esc(c.badge)}</span>
            <h3 class="cm-head-title">${esc(c.title)}</h3>
            <div class="cm-zones" style="margin-top:12px;">
              <div class="cm-zone cm-zone-diy">
                <span class="cm-zone-kicker num">${esc(hs(state.lang, "cmDiyKicker"))}</span>
                <div>${esc(c.diy_zone)}</div>
              </div>
              <div class="cm-zone cm-zone-inflect">
                <span class="cm-zone-kicker num">${esc(c.inflect_kicker || hs(state.lang, "cmInflectKicker"))}</span>
                <div>${esc(c.inflection_point)}</div>
              </div>
              <div class="cm-zone cm-zone-risk">
                <span class="cm-zone-kicker num">${esc(hs(state.lang, "cmRiskKicker"))}</span>
                <div>${esc(c.risk_note)}</div>
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="btn-outline btn-sm" data-cm-act="${esc(actionToken)}">${esc(c.jump_label)}</button>
          </div>
        </article>`;
      })
      .join("");

    root.querySelectorAll("[data-cm-act]").forEach((btn) => {
      btn.addEventListener("click", () => handleActionToken(btn.dataset.cmAct));
    });
  }

  /* 1. CLIENT 13-CASE SELF-ASSESSMENT WIZARD */
  function renderClientWizard(ctx) {
    const { state, esc, handleActionToken } = ctx;
    const fEl = document.getElementById("wizardPracticeFilter");
    const listEl = document.getElementById("wizardCaseList");
    const inspEl = document.getElementById("wizardCaseInspector");
    if (!fEl || !listEl || !inspEl || !state.bootstrap) return;

    const allCases = state.bootstrap.wizard_cases || [];
    const practices = [
      ["all", hs(state.lang, "pracAll")],
      ["employment", hs(state.lang, "pracEmp")],
      ["family", hs(state.lang, "pracFam")],
      ["immigration", hs(state.lang, "pracImmi")],
    ];

    fEl.innerHTML = practices
      .map(
        ([v, lbl]) =>
          `<button type="button" class="filter-pill ${state.wizardPractice === v ? "active" : ""}" data-wiz-prac="${v}">${esc(lbl)}</button>`
      )
      .join("");

    fEl.querySelectorAll("[data-wiz-prac]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.wizardPractice = btn.dataset.wizPrac;
        renderClientWizard(ctx);
      });
    });

    const filtered = allCases.filter(
      (c) => state.wizardPractice === "all" || c.practice === state.wizardPractice
    );
    if (filtered.length && !filtered.some((c) => c.id === state.selectedWizardId)) {
      state.selectedWizardId = filtered[0].id;
    }

    listEl.innerHTML = filtered
      .map(
        (c) => `
        <button type="button" class="scenario-card ${c.id === state.selectedWizardId ? "active" : ""}"
                data-verdict="${esc(c.verdict)}" data-wiz-id="${esc(c.id)}">
          <span class="verdict-chip verdict-${esc(c.verdict)} num">${esc(c.badge)}</span>
          <span class="scenario-card-title">${esc(c.title)}</span>
        </button>`
      )
      .join("");

    listEl.querySelectorAll("[data-wiz-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedWizardId = btn.dataset.wizId;
        renderClientWizard(ctx);
      });
    });

    const active = filtered.find((c) => c.id === state.selectedWizardId) || filtered[0];
    if (!active) {
      inspEl.innerHTML = "";
      return;
    }

    const renderWizLink = (url, label, isDownload, cls) => {
      const isExt = url.startsWith("http");
      const dlAttr = isDownload ? " download" : "";
      const targetAttr = isExt ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${esc(url)}"${targetAttr}${dlAttr} class="${cls}">${esc(label)}</a>`;
    };

    const primHtml = active.primary_url
      ? renderWizLink(active.primary_url, active.primary_label, active.primary_download, "btn-primary")
      : `<button type="button" class="btn-primary" data-wiz-act="${esc(active.primary_action)}">${esc(active.primary_label)}</button>`;

    const secHtml = active.secondary_url
      ? renderWizLink(active.secondary_url, active.secondary_label, active.secondary_download, "btn-outline")
      : `<button type="button" class="btn-outline" data-wiz-act="${esc(active.secondary_action)}">${esc(active.secondary_label)}</button>`;

    inspEl.innerHTML = `
      <span class="verdict-chip verdict-${esc(active.verdict)} num">${esc(active.badge)}</span>
      <h3 class="insp-title">${esc(active.title)}</h3>
      <div class="wiz-quote-box">${esc(active.quote)}</div>

      <div class="insp-box">
        <span class="insp-box-label num">${esc(hs(state.lang, "whyHeading"))}</span>
        <div class="insp-box-val">${esc(active.why)}</div>
      </div>

      <div class="insp-box">
        <span class="insp-box-label num">${esc(hs(state.lang, "stepsHeading"))}</span>
        <ol class="wiz-steps-list">
          ${(active.steps || []).map((st) => `<li>${esc(st)}</li>`).join("")}
        </ol>
      </div>

      <div class="insp-actions">${primHtml}${secHtml}</div>
    `;

    inspEl.querySelectorAll("[data-wiz-act]").forEach((btn) => {
      btn.addEventListener("click", () => handleActionToken(btn.dataset.wizAct));
    });
  }

  /* 2. EMPLOYMENT HUB EXTRAS: 25-AWARD / 129-LEVEL SELECTOR, DIRECTORY, DISAMBIGUATORS & 7-DAY DEMAND */
  function fmtInlineMd(raw, escFn) {
    let s = escFn(raw || "");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/`([^`]+)`/g, "$1");
    s = s.replace(/\*\*+/g, "").replace(/`+/g, "");
    return s;
  }

  function cleanTrap(raw) {
    return String(raw || "").replace(/^(판례 주의보:\s*|Case Law Alert:\s*|Coverage Alert:\s*)/i, "");
  }

  const DEMAND_BREACH_CLAUSES = [
    {
      en: "Failure to issue a written or electronic pay slip within one (1) working day of payment, in contravention of section 536(1) of the Fair Work Act 2009 (Cth).",
      ko: "급여 지급일로부터 1근무일 이내에 서면 또는 전자 급여명세서(Pay Slip)를 교부하지 아니한 행위 (Fair Work Act 2009 (Cth) 제536조 제1항 위반).",
    },
    {
      en: "Omission from issued pay slips of the employer's full legal entity name and/or Australian Business Number (ABN), in contravention of regulations 3.46(1)(a)-(b) of the Fair Work Regulations 2009 (Cth).",
      ko: "급여명세서에 고용주의 정식 법인명 및 사업자등록번호(ABN)를 누락한 행위 (Fair Work Regulations 2009 (Cth) 제3.46조 제1항 위반).",
    },
    {
      en: "Omission from issued pay slips of ordinary hourly rates, penalty/overtime rates, and itemized hours worked at each applicable rate, in contravention of section 536(2) of the Fair Work Act 2009 (Cth) and regulation 3.46(3) of the Fair Work Regulations 2009 (Cth).",
      ko: "급여명세서에 평일·주말·공휴일·연장근무별 적용 시급 및 시간대별 실제 근로시간 기재를 누락한 행위 (Fair Work Act 2009 제536조 제2항 및 동 시행령 제3.46조 제3항 위반).",
    },
    {
      en: "Omission of mandatory Superannuation Guarantee contribution amounts and fund details (Fair Work Regulations 2009 (Cth) reg 3.46(5)) and/or non-remittance of statutory 12% Ordinary Time Earnings superannuation.",
      ko: "급여명세서상 퇴직연금(Superannuation) 납부액·연금펀드 기재를 누락하거나 일반근무급여(OTE) 기준 법정 12% 퇴직연금을 미납한 행위 (동 시행령 제3.46조 제5항 위반).",
    },
    {
      en: "Issuance of false or misleading pay slips and/or unrecorded cash-in-hand wage payments that understate actual hours worked, in contravention of section 536(3) of the Fair Work Act 2009 (Cth).",
      ko: "실제 근로시간·지급액을 축소 기재한 허위·부실 급여명세서 발급 또는 장부 외 현금 지급 행위 (Fair Work Act 2009 제536조 제3항 위반).",
    },
    {
      en: "Failure to make and keep complete, accurate employee time and wages records for seven (7) years, in contravention of section 535 of the Fair Work Act 2009 (Cth) and regulations 3.31-3.34 of the Fair Work Regulations 2009 (Cth).",
      ko: "정확한 출퇴근 및 임금 대장을 작성하여 7년간 보존해야 할 법정 기록 보관 의무를 해태한 행위 (Fair Work Act 2009 제535조 및 동 시행령 제3.31조~제3.34조 위반).",
    },
  ];

  function computeBrisbaneDemandDates() {
    try {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Australia/Brisbane",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const issueStr = fmt.format(now);
      const parts = issueStr.split("-").map(Number);
      const dueUtc = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2] + 7));
      const dueStr = dueUtc.toISOString().slice(0, 10);
      return { issueDate: issueStr, dueDate: dueStr };
    } catch (_) {
      return { issueDate: "Date of Service", dueDate: "7 Calendar Days from Service" };
    }
  }

  function buildPayslipDemandBundle(lang, worker, employer, period, awardLabel, shortfallsStr, selectedIndices) {
    const indices = Array.isArray(selectedIndices) && selectedIndices.length ? selectedIndices : [0, 4, 5];
    const validClauses = indices
      .map((i) => DEMAND_BREACH_CLAUSES[i])
      .filter(Boolean);
    const clausesToUse = validClauses.length ? validClauses : [DEMAND_BREACH_CLAUSES[0]];
    const { issueDate, dueDate } = computeBrisbaneDemandDates();

    const empTextEn = employer || "[Employer Legal Entity Name Pty Ltd & ABN]";
    const wrkTextEn = worker || "[Employee Full Name]";
    const perTextEn = period || "[Employment Start Date to End Date]";
    const awLineEn = awardLabel ? `\nApplicable Industrial Instrument: ${awardLabel}` : "";
    const amtTextEn = shortfallsStr
      ? `${shortfallsStr} (comprising unpaid statutory wages/penalties and 12% Ordinary Time Earnings superannuation, as itemized in the attached Schedule of Underpayment)`
      : "the full statutory wage, penalty, leave, and 12% Ordinary Time Earnings superannuation shortfall set out in the attached Schedule of Underpayment";

    const bulletsEn = clausesToUse.map((c, idx) => `   (${String.fromCharCode(97 + idx)}) ${c.en}`).join("\n");

    const enOnly = `WITHOUT PREJUDICE SAVE AS TO COSTS
FORMAL STATUTORY DEMAND FOR PAY SLIPS, EMPLOYMENT RECORDS & RECTIFICATION OF UNDERPAYMENT
(Fair Work Act 2009 (Cth) ss 535, 536 & 557C; Fair Work Regulations 2009 (Cth) regs 3.31-3.34 & 3.46)

Date of Issue: ${issueDate}
7-Day Compliance Deadline: 5:00 pm (AEST) on ${dueDate}
To: ${empTextEn}
From: ${wrkTextEn}
Employment Period: ${perTextEn}${awLineEn}

Dear Sir / Madam,

1. Notice of Statutory Record-Keeping and Pay Slip Contraventions
During the employment period stated above, your business failed to comply with mandatory civil remedy provisions under sections 535 and 536 of the Fair Work Act 2009 (Cth) and regulations 3.31-3.34 and 3.46 of the Fair Work Regulations 2009 (Cth), specifically:
${bulletsEn}

2. Statutory Reverse Onus of Proof (Fair Work Act 2009 (Cth) s 557C)
Take formal notice that pursuant to section 557C of the Fair Work Act 2009 (Cth), where an employer contravenes record-keeping or pay slip obligations under section 535 or section 536 without reasonable excuse, the statutory burden of disproving the employee's allegations and Schedule of Underpayment rests upon the employer in court proceedings.

3. Formal 7-Calendar-Day Demand
Demand is hereby made that within seven (7) calendar days of the date of this letter (no later than 5:00 pm AEST on ${dueDate}), you:
   (1) Provide complete and accurate copies of all pay slips, time and attendance records, wages ledgers, and superannuation remittance records for the entire employment period pursuant to regulation 3.42 of the Fair Work Regulations 2009 (Cth); and
   (2) Remit in cleared funds, together with compliant Superannuation Guarantee contributions to my nominated fund, ${amtTextEn}.

4. Notice of Escalation Without Further Warning
If full production of records and rectification of all unpaid entitlements do not occur by ${dueDate}, I reserve all rights to commence regulatory and court recovery action without further notice, including:
   - Lodging a formal investigation request with the Fair Work Ombudsman seeking civil penalties under Part 4-1 of the Fair Work Act 2009 (Cth);
   - Reporting unpaid Superannuation Guarantee shortfalls to the Australian Taxation Office (ATO) for Superannuation Guarantee Charge assessment; and
   - Commencing recovery proceedings in the Federal Circuit and Family Court of Australia (Form 5 under section 548, and where applicable, personal accessorial liability claims against directors/officers under section 550 of the Fair Work Act 2009 (Cth)).

Yours faithfully,

${wrkTextEn}`;

    if (lang === "en") {
      return { enOnly, displayText: enOnly };
    }

    const empTextKo = employer || "[고용주 정식 법인명 Pty Ltd 및 ABN 기재]";
    const wrkTextKo = worker || "[근로자 영문 성명 기재]";
    const perTextKo = period || "[재직 시작일 ~ 종료일]";
    const awLineKo = awardLabel ? `\n적용 현대 어워드 및 직급: ${awardLabel}` : "";
    const amtTextKo = shortfallsStr
      ? `${shortfallsStr} (별첨 미지급 임금 정산표상 법정 시급·가산수당 차액 및 일반근무급여(OTE) 기준 12% 퇴직연금 합계액)`
      : "별첨 미지급 임금 정산표(Schedule of Underpayment)에 기재된 법정 임금·가산수당 차액 및 12% 퇴직연금 전액";
    const bulletsKo = clausesToUse.map((c, idx) => `   (${idx + 1}) ${c.ko}`).join("\n");

    const koRef = `[한국어 공식 대조 참조본 · 내용 확인용 (실제 발송 시 상단 PART 1 영문 서한 사용 권장)]
제목: 급여명세서(Pay Slip)·근로기록 사본 교부 및 미지급 법정 임금·퇴직연금 정산 최고서 (7일 기한)
근거 법령: 호주 공정근로법(Fair Work Act 2009 (Cth)) 제535조·제536조·제557C조 및 동 시행령 제3.31조~제3.34조·제3.46조

발송일: ${issueDate} / 이행 기한: ${dueDate} 17:00 (AEST)까지 (7일)
수신 (고용주 법인명 및 ABN): ${empTextKo}
발신 (근로자 성명): ${wrkTextKo}
재직 기간: ${perTextKo}${awLineKo}

1. 급여명세서 교부 및 근로기록 보존 의무 위반 통지
귀 법인은 위 재직 기간 동안 호주 공정근로법 제535조·제536조 및 동 시행령이 정한 강행 법규를 다음과 같이 위반하였습니다.
${bulletsKo}

2. 소송상 입증책임 전환 고지 (Fair Work Act 2009 제557C조)
호주 공정근로법 제557C조에 의거하여 고용주가 정당한 사유 없이 제535조(근로기록 보존) 또는 제536조(급여명세서 교부) 의무를 위반한 경우 법원 절차에서는 근로자가 산정한 근로시간 및 미지급 청구 내역이 사실과 다르다는 점을 고용주가 직접 반증할 책임을 부담합니다.

3. 7일 이내 정식 이행 최고 사항
본 서한 발송일로부터 7일 이내(${dueDate} 오후 5시까지)에 아래 두 가지 사항을 모두 이행하시기 바랍니다.
   (1) 전체 재직 기간에 대한 적법한 급여명세서·출퇴근 기록·급여 지급 대장 및 퇴직연금 납부 내역 사본 일체 교부 (시행령 제3.42조 근거)
   (2) ${amtTextKo}의 지정 계좌 및 지정 연금펀드 전액 납입

4. 기한 도과 시 후속 법적 조치 예고
위 기한(${dueDate})까지 서류 교부 및 전액 정산이 완료되지 않을 경우 별도 최고 없이 공정근로옴부즈만(Fair Work Ombudsman) 법정 과태료 조사 신청과 호주 국세청(ATO) 미납 퇴직연금 추징 신고 및 연방순회·가족법원(FCFCOA) 임금 청구 소송(제548조 Form 5 및 필요시 제550조 대표자 개인 배상책임 병합 청구)을 즉시 진행할 예정임을 엄중히 통지합니다.`;

    const displayText = `[PART 1] FORMAL LETTER OF DEMAND (호주 고용주 발송용 영문 정식 서한)\n${enOnly}\n\n========================================================================\n\n${koRef}`;
    return { enOnly, displayText };
  }

  function renderEmploymentExtras(ctx) {
    const { state, esc, copyText, showToast, applyAwardPresetToInputs } = ctx;
    const hubs = state.bootstrap?.hubs;
    if (!hubs) return;

    const emp = hubs.employment;
    const bundle = hubs.awards_bundle || { sectors: [], awards: [], disambiguators: [], empirical: null };
    const awards = bundle.awards || [];
    const sectors = bundle.sectors || [];

    const pdfBtn = document.getElementById("empPdfTopBtn");
    if (pdfBtn && emp.pdf_download_url) {
      pdfBtn.href = emp.pdf_download_url;
    }

    // 2A. Empirical 25-Award Banner
    const empBannerEl = document.getElementById("empEmpiricalBanner");
    if (empBannerEl && bundle.empirical) {
      const em = bundle.empirical;
      empBannerEl.innerHTML = `
        <div class="emp-empirical-main">
          <span class="pilot-pill num">${esc(em.badge)}</span>
          <h3 class="emp-empirical-title">${fmtInlineMd(em.title, esc)}</h3>
          <p class="emp-empirical-body">${fmtInlineMd(em.body, esc)}</p>
        </div>
        <div class="emp-empirical-actions">
          <button type="button" class="btn-primary btn-sm" id="jumpToAwardDirBtn">${esc(hs(state.lang, "jumpDirBtn"))}</button>
          <button type="button" class="btn-outline btn-sm" id="jumpToDisambBtn">${esc(hs(state.lang, "jumpDisambBtn"))}</button>
        </div>
      `;
      document.getElementById("jumpToAwardDirBtn")?.addEventListener("click", () => {
        document.getElementById("empAwardDirectoryRoot")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      document.getElementById("jumpToDisambBtn")?.addEventListener("click", () => {
        document.getElementById("empDisambiguatorsRoot")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    // 2B. Calculator Sector Filter + 2-Tier Award/Level Selectors + Live Classification Inspector
    const syncAwardSelectControls = () => {
      const sectorPillsEl = document.getElementById("sbSectorPills");
      if (sectorPillsEl) {
        sectorPillsEl.innerHTML = sectors
          .map(
            (s) =>
              `<button type="button" class="filter-pill ${state.empSector === s.id ? "active" : ""}" data-sb-sector="${esc(s.id)}">${esc(s.label)}</button>`
          )
          .join("");
        sectorPillsEl.querySelectorAll("[data-sb-sector]").forEach((btn) => {
          btn.addEventListener("click", () => {
            state.hasUserCalculated = true;
            state.empSector = btn.dataset.sbSector;
            const visible = awards.filter((a) => state.empSector === "all" || a.sector === state.empSector);
            if (
              state.empAwardCode !== "custom" &&
              visible.length &&
              !visible.some((a) => a.award_code === state.empAwardCode)
            ) {
              state.empAwardCode = visible[0].award_code;
              state.empPresetId = visible[0].levels[0].id;
            }
            syncAwardSelectControls();
            applyAwardPresetToInputs();
          });
        });
      }

      const awardSel = document.getElementById("sbAwardSelect");
      const levelSel = document.getElementById("sbLevelSelect");
      const levelWrap = document.getElementById("sbLevelSelectWrap");

      const filteredAwards = awards.filter((a) => state.empSector === "all" || a.sector === state.empSector);
      if (awardSel) {
        const awOpts = filteredAwards
          .map(
            (a) =>
              `<option value="${esc(a.award_code)}" ${state.empAwardCode === a.award_code ? "selected" : ""}>${esc(a.award_code)} · ${esc(a.name)}</option>`
          )
          .concat([
            `<option value="custom" ${state.empAwardCode === "custom" ? "selected" : ""}>${esc(hs(state.lang, "empPresetCustom"))}</option>`,
          ]);
        awardSel.innerHTML = awOpts.join("");
      }

      if (levelSel) {
        if (state.empAwardCode === "custom") {
          levelSel.innerHTML = `<option value="custom">${esc(hs(state.lang, "empPresetCustom"))}</option>`;
          levelSel.disabled = true;
          if (levelWrap) levelWrap.style.opacity = "0.55";
        } else {
          levelSel.disabled = false;
          if (levelWrap) levelWrap.style.opacity = "1";
          const activeAw = awards.find((a) => a.award_code === state.empAwardCode) || filteredAwards[0] || awards[0];
          if (activeAw) {
            state.empAwardCode = activeAw.award_code;
            if (!activeAw.levels.some((l) => l.id === state.empPresetId)) {
              state.empPresetId = activeAw.levels[0].id;
            }
            levelSel.innerHTML = activeAw.levels
              .map((lv) => {
                const rPack = state.empType === "pt" ? lv.pt : state.empType === "ft" ? lv.ft : lv.casual;
                return `<option value="${esc(lv.id)}" ${state.empPresetId === lv.id ? "selected" : ""}>${esc(lv.title)} · $${Number(rPack.mf).toFixed(2)}/h (Sun $${Number(rPack.sun).toFixed(2)})</option>`;
              })
              .join("");
          }
        }
      }

      document.querySelectorAll("[data-emp-type]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.empType === state.empType);
      });
    };

    const renderClassificationInspector = () => {
      const cardEl = document.getElementById("sbClassificationCard");
      if (!cardEl) return;

      if (state.empAwardCode === "custom" || state.empPresetId === "custom") {
        cardEl.innerHTML = `
          <div class="class-insp-head">
            <strong>${esc(hs(state.lang, "customModeTitle"))}</strong>
          </div>
          <p style="margin:4px 0 0;font-size:13.5px;color:#4A4543;">${esc(hs(state.lang, "customModeDesc"))}</p>
        `;
        return;
      }

      const aw = awards.find((a) => a.award_code === state.empAwardCode);
      const lv = aw ? aw.levels.find((l) => l.id === state.empPresetId) || aw.levels[0] : null;
      if (!aw || !lv) {
        cardEl.innerHTML = "";
        return;
      }

      const ptDiff =
        lv.pt && (lv.pt.mf !== lv.ft.mf || lv.pt.sat !== lv.ft.sat)
          ? `<div class="class-pt-badge num">${esc(hs(state.lang, "dirPtNotePrefix"))}$${lv.pt.mf.toFixed(2)} M–F / $${lv.pt.sat.toFixed(2)} Sat / $${lv.pt.sun.toFixed(2)} Sun</div>`
          : "";

      cardEl.innerHTML = `
        <div class="class-insp-head">
          <div class="class-insp-badges">
            <span class="pilot-pill num">${esc(aw.award_code)}</span>
            <span class="gate-pill num">${esc(aw.sector_tag || "")}</span>
          </div>
          <div class="class-insp-links">
            <a href="${esc(aw.payguide_url)}" target="_blank" rel="noopener" class="btn-outline btn-sm">${esc(hs(state.lang, "openPayGuideBtn"))}</a>
            <a href="${esc(aw.award_url)}" target="_blank" rel="noopener" class="btn-outline btn-sm">${esc(hs(state.lang, "openFwcAwardBtn"))}</a>
          </div>
        </div>

        <h4 class="class-insp-title">${esc(aw.award_code)} · ${esc(aw.name)} · ${esc(lv.title)}</h4>
        ${ptDiff}

        <div class="class-insp-grid">
          <div class="class-insp-cell">
            <span class="insp-box-label num">${esc(hs(state.lang, "lblTypicalJobs"))}</span>
            <div><strong>${fmtInlineMd(lv.jobs, esc)}</strong></div>
          </div>
          <div class="class-insp-cell">
            <span class="insp-box-label num">${esc(hs(state.lang, "lblClassRule"))}</span>
            <div>${fmtInlineMd(lv.duties, esc)}</div>
          </div>
          <div class="class-insp-cell">
            <span class="insp-box-label num">${esc(hs(state.lang, "lblAllowances"))}</span>
            <div>${fmtInlineMd(aw.allowances, esc)}</div>
          </div>
          <div class="class-insp-cell">
            <span class="insp-box-label num">${esc(hs(state.lang, "lblOtRule"))}</span>
            <div>${fmtInlineMd(aw.ot_rule, esc)}</div>
          </div>
        </div>

        <div class="class-trap-box">
          <span class="insp-box-label num" style="color:#0E3A3E;">${esc(hs(state.lang, "lblTrapAlert"))}</span>
          <div style="font-size:13px;line-height:1.55;color:#14282A;">${fmtInlineMd(cleanTrap(aw.trap), esc)}</div>
        </div>
      `;
    };

    const loadLevelIntoCalculator = (awardCode, levelId, { scroll = false } = {}) => {
      state.hasUserCalculated = true;
      state.empSector = "all";
      state.empAwardCode = awardCode;
      state.empPresetId = levelId;
      syncAwardSelectControls();
      applyAwardPresetToInputs();
      if (scroll) {
        document.getElementById("empCalculatorCard")?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (typeof showToast === "function") {
          showToast(hs(state.lang, "dirLoadedToast"));
        }
      }
    };

    ctx.syncAwardSelectControls = syncAwardSelectControls;
    ctx.renderClassificationInspector = renderClassificationInspector;
    syncAwardSelectControls();
    renderClassificationInspector();

    // 2C. Quick Job/Qualification Search inside Calculator Bar
    const qInput = document.getElementById("sbAwardSearch");
    const qClear = document.getElementById("sbAwardSearchClear");
    const qDrop = document.getElementById("sbQuickSearchResults");
    if (qInput && qClear && qDrop) {
      qInput.oninput = () => {
        const raw = qInput.value.trim();
        qClear.classList.toggle("hidden", !raw);
        if (!raw) {
          qDrop.classList.add("hidden");
          return;
        }
        const terms = raw.toLowerCase().split(/\s+/).filter(Boolean);
        const matches = [];
        for (const aw of awards) {
          for (const lv of aw.levels) {
            const hay = `${aw.award_code} ${aw.name} ${aw.coverage} ${lv.level_code} ${lv.title} ${lv.jobs} ${lv.duties}`.toLowerCase();
            if (terms.every((t) => hay.includes(t))) {
              matches.push({ aw, lv });
              if (matches.length >= 16) break;
            }
          }
          if (matches.length >= 16) break;
        }
        qDrop.classList.remove("hidden");
        if (!matches.length) {
          qDrop.innerHTML = `<div class="quick-hit-empty">${esc(hs(state.lang, "quickSearchEmpty"))}</div>`;
          return;
        }
        qDrop.innerHTML = matches
          .map(
            ({ aw, lv }) => `
            <button type="button" class="quick-hit-row" data-q-aw="${esc(aw.award_code)}" data-q-lv="${esc(lv.id)}">
              <div>
                <span class="doc-nav-badge num">${esc(aw.award_code)} · ${esc(aw.name)}</span>
                <strong style="display:block;font-size:13.5px;color:#14282A;">${esc(lv.title)}</strong>
                <span style="font-size:12px;color:#5A5654;">${fmtInlineMd(lv.jobs, esc)}</span>
              </div>
              <div class="quick-hit-rates num">
                <span>FT $${lv.ft.mf.toFixed(2)} / Cas $${lv.casual.mf.toFixed(2)}</span>
                <span class="btn-primary btn-sm">${esc(hs(state.lang, "quickLoadBtn"))}</span>
              </div>
            </button>`
          )
          .join("");

        qDrop.querySelectorAll("[data-q-lv]").forEach((btn) => {
          btn.addEventListener("click", () => {
            qDrop.classList.add("hidden");
            loadLevelIntoCalculator(btn.dataset.qAw, btn.dataset.qLv, { scroll: false });
          });
        });
      };

      qClear.onclick = () => {
        qInput.value = "";
        qClear.classList.add("hidden");
        qDrop.classList.add("hidden");
      };
    }

    // 2D. 4 Legal Disambiguators & Case-Law Alerts
    const disambRoot = document.getElementById("empDisambiguatorsRoot");
    if (disambRoot) {
      const cards = bundle.disambiguators || [];
      disambRoot.innerHTML = `
        <div class="section-header-row" style="margin-bottom:12px;">
          <div>
            <span class="section-overline num">${esc(hs(state.lang, "disambOverline"))}</span>
            <h3 class="section-title-sm">${esc(hs(state.lang, "disambTitle"))}</h3>
          </div>
        </div>
        <div class="disamb-2-grid">
          ${cards
            .map(
              (d) => `
            <div class="disamb-card">
              <span class="pilot-pill num">${esc(d.badge)}</span>
              <h4 class="shelf-title" style="margin:8px 0 10px;">${esc(d.title)}</h4>
              <ul class="disamb-list">
                ${(d.items || []).map((it) => `<li>${fmtInlineMd(it, esc)}</li>`).join("")}
              </ul>
            </div>`
            )
            .join("")}
        </div>
      `;
    }

    // 2E. Master 25-Award / 129-Classification Interactive Directory
    const dirRoot = document.getElementById("empAwardDirectoryRoot");
    const renderDirectory = () => {
      if (!dirRoot) return;
      const q = (state.dirQuery || "").trim().toLowerCase();
      const qTerms = q ? q.split(/\s+/).filter(Boolean) : [];

      const matchedAwards = [];
      let totalMatchedLevels = 0;

      for (const aw of awards) {
        if (state.dirSector !== "all" && aw.sector !== state.dirSector) continue;
        if (!qTerms.length) {
          matchedAwards.push({ aw, levels: aw.levels });
          totalMatchedLevels += aw.levels.length;
        } else {
          const awHay = `${aw.award_code} ${aw.name} ${aw.coverage} ${aw.trap}`.toLowerCase();
          const awMatch = qTerms.every((t) => awHay.includes(t));
          const lvMatches = aw.levels.filter((lv) => {
            const lvHay = `${awHay} ${lv.level_code} ${lv.title} ${lv.jobs} ${lv.duties}`.toLowerCase();
            return qTerms.every((t) => lvHay.includes(t));
          });
          if (awMatch || lvMatches.length) {
            const useLevels = lvMatches.length ? lvMatches : aw.levels;
            matchedAwards.push({ aw, levels: useLevels });
            totalMatchedLevels += useLevels.length;
          }
        }
      }

      const countSummary =
        state.lang === "en"
          ? `Showing ${matchedAwards.length} instruments · ${totalMatchedLevels} verified classifications`
          : `현재 ${matchedAwards.length}개 업종 · ${totalMatchedLevels}개 세부 직급 표시`;

      dirRoot.innerHTML = `
        <div class="hub-panel-card award-dir-shell">
          <div class="section-header-row" style="margin-bottom:10px;">
            <div>
              <span class="section-overline num">${esc(hs(state.lang, "dirOverline"))}</span>
              <h3 class="section-title-sm">${esc(hs(state.lang, "dirTitle"))}</h3>
              <p class="section-subdesc" style="max-width:none;margin-top:4px;">${esc(hs(state.lang, "dirSub"))}</p>
            </div>
            <div class="dir-top-actions">
              <button type="button" class="btn-outline btn-sm" id="dirExpandAllBtn">${esc(hs(state.lang, "dirExpandAll"))}</button>
              <button type="button" class="btn-ghost btn-sm" id="dirCollapseAllBtn">${esc(hs(state.lang, "dirCollapseAll"))}</button>
            </div>
          </div>

          <div class="sector-pills-row" id="dirSectorPills">
            ${sectors
              .map(
                (s) =>
                  `<button type="button" class="filter-pill ${state.dirSector === s.id ? "active" : ""}" data-dir-sec="${esc(s.id)}">${esc(s.label)}</button>`
              )
              .join("")}
          </div>

          <div class="dir-search-bar">
            <input type="search" id="dirSearchInput" class="search-input" value="${esc(state.dirQuery || "")}"
                   placeholder="${esc(hs(state.lang, "dirSearchPh"))}" autocomplete="off">
            <span class="gate-pill num">${esc(countSummary)}</span>
          </div>

          <div class="award-accordion-list">
            ${matchedAwards
              .map(({ aw, levels }) => {
                const isOpen = qTerms.length > 0 || Boolean(state.dirExpandedCodes[aw.award_code]);
                const evePfx = aw.eve_mode === "add" ? "+$" : "$";
                return `
                <div class="award-acc-item ${isOpen ? "open" : ""}">
                  <button type="button" class="award-acc-header" data-toggle-aw="${esc(aw.award_code)}">
                    <div class="award-acc-title-cluster">
                      <span class="award-rank-chip num">#${aw.rank}</span>
                      <span class="pilot-pill num">${esc(aw.award_code)}</span>
                      <strong class="award-acc-name">${esc(aw.name)}</strong>
                      <span class="gate-pill num">${esc(aw.sector_tag || "")}</span>
                    </div>
                    <div class="award-acc-right num">
                      <span>${levels.length} ${state.lang === "en" ? "levels" : "직급"}</span>
                      <span class="acc-chevron">${isOpen ? "▲" : "▼"}</span>
                    </div>
                  </button>
                  <div class="award-acc-body ${isOpen ? "" : "hidden"}">
                    <div class="award-meta-strip">
                      <div><strong>${state.lang === "en" ? "Coverage:" : "적용 업종:"}</strong> ${fmtInlineMd(aw.coverage, esc)}</div>
                      <div><strong>${esc(hs(state.lang, "lblAllowances"))}:</strong> ${fmtInlineMd(aw.allowances, esc)}</div>
                      <div class="award-meta-trap"><strong>${esc(hs(state.lang, "lblTrapAlert"))}:</strong> ${fmtInlineMd(cleanTrap(aw.trap), esc)}</div>
                      <div class="award-meta-links">
                        <a href="${esc(aw.payguide_url)}" target="_blank" rel="noopener" class="btn-outline btn-sm">${esc(hs(state.lang, "openPayGuideBtn"))}</a>
                        <a href="${esc(aw.award_url)}" target="_blank" rel="noopener" class="btn-outline btn-sm">${esc(hs(state.lang, "openFwcAwardBtn"))}</a>
                      </div>
                    </div>

                    <div class="dir-table-scroll">
                      <table class="dir-rates-table">
                        <thead>
                          <tr>
                            <th>${esc(hs(state.lang, "dirThLevel"))}</th>
                            <th class="num">${esc(hs(state.lang, "dirThFt"))}</th>
                            <th class="num">${esc(hs(state.lang, "dirThCas"))}</th>
                            <th class="num">${esc(hs(state.lang, "dirThEveOt"))}</th>
                            <th>${esc(hs(state.lang, "dirThAction"))}</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${levels
                            .map((lv) => {
                              const hasPtDiff = lv.pt && lv.pt.mf !== lv.ft.mf;
                              return `
                              <tr>
                                <td>
                                  <strong style="color:#14282A;">${esc(lv.title)}</strong>
                                  <div style="font-size:12.5px;color:#0E3A3E;font-weight:700;margin-top:2px;">${fmtInlineMd(lv.jobs, esc)}</div>
                                  <div style="font-size:12px;color:#5A5654;margin-top:2px;">${fmtInlineMd(lv.duties, esc)}</div>
                                  ${
                                    hasPtDiff
                                      ? `<div class="num" style="font-size:11.5px;color:#1F5A5E;font-weight:700;margin-top:3px;">${esc(hs(state.lang, "dirPtNotePrefix"))}$${lv.pt.mf.toFixed(2)} / $${lv.pt.sat.toFixed(2)} / $${lv.pt.sun.toFixed(2)} / $${lv.pt.ph.toFixed(2)}</div>`
                                      : ""
                                  }
                                </td>
                                <td class="num rate-cell">
                                  <strong>$${lv.ft.mf.toFixed(2)}</strong> / $${lv.ft.sat.toFixed(2)} / $${lv.ft.sun.toFixed(2)} / $${lv.ft.ph.toFixed(2)}
                                </td>
                                <td class="num rate-cell">
                                  <strong style="color:#0E3A3E;">$${lv.casual.mf.toFixed(2)}</strong> / $${lv.casual.sat.toFixed(2)} / <strong>$${lv.casual.sun.toFixed(2)}</strong> / $${lv.casual.ph.toFixed(2)}
                                </td>
                                <td class="num rate-cell">
                                  <div>${lv.casual.eve > 0 ? `${evePfx}${lv.casual.eve.toFixed(2)}/h` : "-"}</div>
                                  <div style="font-size:11.5px;color:#5A5654;">OT $${lv.casual.ot1.toFixed(2)} · $${lv.casual.ot2.toFixed(2)}</div>
                                </td>
                                <td>
                                  <button type="button" class="btn-primary btn-sm" data-dir-load-aw="${esc(aw.award_code)}" data-dir-load-lv="${esc(lv.id)}">${esc(hs(state.lang, "dirLoadBtn"))}</button>
                                </td>
                              </tr>`;
                            })
                            .join("")}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>`;
              })
              .join("")}
          </div>
        </div>
      `;

      dirRoot.querySelectorAll("[data-dir-sec]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.dirSector = btn.dataset.dirSec;
          renderDirectory();
        });
      });

      const dSearch = document.getElementById("dirSearchInput");
      if (dSearch) {
        dSearch.addEventListener("input", () => {
          const pos = dSearch.selectionStart;
          state.dirQuery = dSearch.value;
          renderDirectory();
          const nextInput = document.getElementById("dirSearchInput");
          if (nextInput) {
            nextInput.focus();
            try {
              nextInput.setSelectionRange(pos, pos);
            } catch (_) {}
          }
        });
      }

      document.getElementById("dirExpandAllBtn")?.addEventListener("click", () => {
        awards.forEach((a) => {
          state.dirExpandedCodes[a.award_code] = true;
        });
        renderDirectory();
      });

      document.getElementById("dirCollapseAllBtn")?.addEventListener("click", () => {
        state.dirExpandedCodes = {};
        renderDirectory();
      });

      dirRoot.querySelectorAll("[data-toggle-aw]").forEach((hdr) => {
        hdr.addEventListener("click", () => {
          const c = hdr.dataset.toggleAw;
          state.dirExpandedCodes[c] = !state.dirExpandedCodes[c];
          renderDirectory();
        });
      });

      dirRoot.querySelectorAll("[data-dir-load-lv]").forEach((btn) => {
        btn.addEventListener("click", () => {
          loadLevelIntoCalculator(btn.dataset.dirLoadAw, btn.dataset.dirLoadLv, { scroll: true });
        });
      });
    };

    renderDirectory();

    // 2F. Render Payslip Breach Generator + Free Government Regulator Matrix
    const dualEl = document.getElementById("empRightsAndRegulatorsContainer");
    if (dualEl) {
      const checks = emp.payslip_checklist || [];
      const copyButtonsHtml =
        state.lang === "en"
          ? `<div class="demand-copy-bar">
               <button type="button" class="btn-primary" id="psCopyDemandBtn">${esc(hs(state.lang, "copyDemandBtn"))}</button>
             </div>`
          : `<div class="demand-copy-bar">
               <button type="button" class="btn-primary" id="psCopyEnOnlyBtn">${esc(hs(state.lang, "copyEnDemandBtn"))}</button>
               <button type="button" class="btn-outline demand-btn-secondary" id="psCopyDemandBtn">${esc(hs(state.lang, "copyDemandBtn"))}</button>
             </div>`;

      dualEl.innerHTML = `
        <div class="hub-panel-card" id="payslipAuditCard">
          <span class="section-overline num">${esc(hs(state.lang, "payslipOverline"))}</span>
          <h3 class="section-title-sm">${esc(hs(state.lang, "payslipTitle"))}</h3>
          <p class="section-subdesc" style="max-width:none;margin:6px 0 12px;">${esc(hs(state.lang, "payslipSub"))}</p>

          <div class="mini-form-grid">
            <label>
              <span class="insp-box-label num">${esc(hs(state.lang, "lblWorkerName"))}</span>
              <input type="text" id="psWorkerInput" class="mini-input" placeholder="${esc(hs(state.lang, "phWorkerName"))}">
            </label>
            <label>
              <span class="insp-box-label num">${esc(hs(state.lang, "lblEmployerName"))}</span>
              <input type="text" id="psEmployerInput" class="mini-input" placeholder="${esc(hs(state.lang, "phEmployerName"))}">
            </label>
            <label>
              <span class="insp-box-label num">${esc(hs(state.lang, "lblWorkPeriod"))}</span>
              <input type="text" id="psPeriodInput" class="mini-input" placeholder="${esc(hs(state.lang, "phWorkPeriod"))}">
            </label>
          </div>

          <div class="demand-calc-import-box">
            <label class="demand-calc-import-toggle" for="psImportCalcCheck">
              <input type="checkbox" id="psImportCalcCheck" ${state.hasUserCalculated && state.importCalcToDemand ? "checked" : ""} ${state.hasUserCalculated ? "" : "disabled"}>
              <span>${esc(hs(state.lang, "lblImportCalc"))}</span>
            </label>
            <p class="demand-calc-import-hint" id="psCalcImportHint"></p>
            <div class="demand-manual-grid">
              <div class="demand-manual-field">
                <label for="psManualAwardInput">${esc(hs(state.lang, "lblManualAward"))}</label>
                <input type="text" id="psManualAwardInput" placeholder="${esc(hs(state.lang, "phManualAward"))}">
              </div>
              <div class="demand-manual-field">
                <label for="psManualAmountInput">${esc(hs(state.lang, "lblManualAmount"))}</label>
                <input type="text" id="psManualAmountInput" placeholder="${esc(hs(state.lang, "phManualAmount"))}">
              </div>
            </div>
          </div>

          <div class="check-list-grid" id="psChecklistWrap">
            ${checks
              .map(
                (item, idx) => `
              <label class="check-row">
                <input type="checkbox" data-ps-check="${idx}" ${idx === 0 || idx === 4 || idx === 5 ? "checked" : ""}>
                <span>${esc(item)}</span>
              </label>`
              )
              .join("")}
          </div>

          <textarea id="psDemandPreview" class="email-textarea" readonly style="min-height:230px;margin-bottom:4px;"></textarea>
          ${copyButtonsHtml}
        </div>

        <div class="hub-panel-card">
          <span class="section-overline num">${esc(hs(state.lang, "regOverline"))}</span>
          <h3 class="section-title-sm">${esc(hs(state.lang, "regTitle"))}</h3>
          <p class="section-subdesc" style="max-width:none;margin:6px 0 12px;">${esc(hs(state.lang, "regSub"))}</p>
          <div class="regulator-stack">
            ${(emp.regulators || [])
              .map(
                (r) => `
              <div class="regulator-card">
                <div class="regulator-head">
                  <strong style="font-size:14.5px;color:#14282A;">${esc(r.agency)}</strong>
                  <span class="gate-pill num">${esc(r.phone)}</span>
                </div>
                <p style="margin:0 0 9px;font-size:13px;color:#4A4543;line-height:1.5;">${esc(r.when)}</p>
                <a href="${esc(r.url)}" target="_blank" rel="noopener" class="btn-outline btn-sm">${esc(hs(state.lang, "openAgencyBtn"))}</a>
              </div>`
              )
              .join("")}
          </div>
        </div>
      `;

      let latestDemandBundle = { enOnly: "", displayText: "" };

      const refreshDemand = () => {
        const w = document.getElementById("psWorkerInput")?.value.trim() || "";
        const e = document.getElementById("psEmployerInput")?.value.trim() || "";
        const p = document.getElementById("psPeriodInput")?.value.trim() || "";
        const manualAw = document.getElementById("psManualAwardInput")?.value.trim() || "";
        const manualAmt = document.getElementById("psManualAmountInput")?.value.trim() || "";

        const impCb = document.getElementById("psImportCalcCheck");
        const hintEl = document.getElementById("psCalcImportHint");
        const canImport = Boolean(state.hasUserCalculated);
        if (impCb) {
          impCb.disabled = !canImport;
          if (!canImport) {
            impCb.checked = false;
            state.importCalcToDemand = false;
          } else {
            impCb.checked = Boolean(state.importCalcToDemand);
          }
        }

        const useImported = Boolean(canImport && state.importCalcToDemand);
        if (hintEl) {
          if (!canImport) {
            hintEl.textContent = hs(state.lang, "hintCalcNotRun");
          } else {
            const tpl = hs(state.lang, useImported ? "hintCalcImported" : "hintCalcReady");
            hintEl.textContent = tpl
              .replace("{award}", state.selectedAwardLabel || "-")
              .replace("{amount}", state.lastCalculatedSummaryAmount || "-");
          }
        }

        const effectiveAward = useImported ? state.selectedAwardLabel || manualAw : manualAw;
        const effectiveAmount = useImported ? state.lastCalculatedSummaryAmount || manualAmt : manualAmt;

        const selectedIndices = [];
        dualEl.querySelectorAll("[data-ps-check]").forEach((cb) => {
          if (cb.checked) {
            const idx = parseInt(cb.dataset.psCheck, 10);
            if (!Number.isNaN(idx)) selectedIndices.push(idx);
          }
        });
        const chosenIndices = selectedIndices.length ? selectedIndices : [0, 4, 5];

        latestDemandBundle = buildPayslipDemandBundle(
          state.lang,
          w,
          e,
          p,
          effectiveAward,
          effectiveAmount,
          chosenIndices
        );

        const preview = document.getElementById("psDemandPreview");
        if (preview) {
          preview.value = latestDemandBundle.displayText;
        }
      };

      ["psWorkerInput", "psEmployerInput", "psPeriodInput", "psManualAwardInput", "psManualAmountInput"].forEach(
        (id) => {
          document.getElementById(id)?.addEventListener("input", refreshDemand);
        }
      );
      document.getElementById("psImportCalcCheck")?.addEventListener("change", (ev) => {
        state.importCalcToDemand = Boolean(state.hasUserCalculated && ev.target.checked);
        refreshDemand();
      });
      dualEl.querySelectorAll("[data-ps-check]").forEach((cb) => {
        cb.addEventListener("change", refreshDemand);
      });
      document.getElementById("psCopyEnOnlyBtn")?.addEventListener("click", () => {
        copyText(latestDemandBundle.enOnly || "", hs(state.lang, "copiedEnDemandToast"));
      });
      document.getElementById("psCopyDemandBtn")?.addEventListener("click", () => {
        const txt = document.getElementById("psDemandPreview")?.value || "";
        copyText(txt, hs(state.lang, "copiedDemandToast"));
      });
      ctx.refreshPayslipDemand = refreshDemand;
      refreshDemand();
    }

    // Curated Employment Columns & Guides
    const blogEl = document.getElementById("empBlogSection");
    if (blogEl) {
      blogEl.innerHTML = renderBlogGrid(
        emp.blogs,
        state.lang,
        hs(state.lang, "empBlogsOverline"),
        hs(state.lang, "empBlogsTitle")
      );
    }
  }

  /* 3. DEDICATED FAMILY LAW HUB */
  function renderFamilyHub(ctx) {
    const { state, esc, handleActionToken } = ctx;
    const root = document.getElementById("familyHubRoot");
    const fam = state.bootstrap?.hubs?.family;
    if (!root || !fam) return;

    root.innerHTML = `
      <div class="hub-hero-banner">
        <div class="hub-hero-main">
          <span class="pilot-verified num">${esc(hs(state.lang, "famHeroKicker"))}</span>
          <h2 class="hub-hero-title">${esc(hs(state.lang, "famHeroTitle"))}</h2>
          <p class="hub-hero-desc">${esc(hs(state.lang, "famHeroDesc"))}</p>
        </div>
        <div class="hub-hero-ctas">
          <a href="${esc(fam.jotform_url)}" target="_blank" rel="noopener" class="btn-primary">${esc(hs(state.lang, "openFamJotformHeroBtn"))}</a>
          <a href="${esc(fam.pdf_download_url)}" download class="btn-outline">${esc(hs(state.lang, "dlFamPdfBtn"))}</a>
          <button type="button" class="btn-outline btn-sm" data-fam-doc="03_fam">${esc(hs(state.lang, "readFamCookbookBtn"))}</button>
        </div>
      </div>

      <div class="pillars-3-grid">
        ${(fam.pillars || [])
          .map(
            (p) => `
          <div class="pillar-card">
            <span class="section-overline num">${esc(p.step)}</span>
            <h3 class="shelf-title">${esc(p.title)}</h3>
            <p class="shelf-sub">${esc(p.summary)}</p>
            <ul>${(p.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          </div>`
          )
          .join("")}
      </div>

      <div class="section-header-row" style="margin-bottom:12px;">
        <div>
          <span class="section-overline num">${esc(hs(state.lang, "famTracksOverline"))}</span>
          <h3 class="section-title">${esc(hs(state.lang, "famTracksTitle"))}</h3>
        </div>
      </div>

      <div class="inflection-2-grid">
        ${(fam.inflection_tracks || [])
          .map(
            (tr) => `
          <div class="inflection-card">
            <span class="pilot-pill num">${esc(tr.badge)}</span>
            <h4 class="insp-title" style="margin-top:10px;">${esc(tr.title)}</h4>
            <p style="font-size:14px;color:#2E2E2E;line-height:1.6;">${esc(tr.desc)}</p>
            <ul class="wiz-steps-list" style="margin-bottom:16px;">
              ${(tr.highlights || []).map((h) => `<li><strong>${esc(h)}</strong></li>`).join("")}
            </ul>
            <a href="${esc(fam.jotform_url)}" target="_blank" rel="noopener" class="btn-primary">${esc(hs(state.lang, "famJotformCtaBtn"))}</a>
          </div>`
          )
          .join("")}
      </div>

      <div class="hub-panel-card">
        <span class="section-overline num">${esc(hs(state.lang, "famChecklistOverline"))}</span>
        <h3 class="section-title-sm">${esc(hs(state.lang, "famChecklistTitle"))}</h3>
        <p class="section-subdesc" style="max-width:none;margin:6px 0 12px;">${esc(hs(state.lang, "famChecklistSub"))}</p>
        <div class="check-list-grid">
          ${(fam.readiness_checks || [])
            .map(
              (chk, i) => `
            <label class="check-row">
              <input type="checkbox" ${i < 2 ? "checked" : ""}>
              <span>${esc(chk)}</span>
            </label>`
            )
            .join("")}
        </div>
        <div class="insp-actions">
          <a href="${esc(fam.jotform_url)}" target="_blank" rel="noopener" class="btn-primary">${esc(hs(state.lang, "famJotformCtaBtn"))}</a>
          <a href="${esc(fam.pdf_download_url)}" download class="btn-outline">${esc(hs(state.lang, "dlFamPdfBtn"))}</a>
        </div>
      </div>

      <div class="hub-blog-section">
        ${renderBlogGrid(
          fam.blogs,
          state.lang,
          hs(state.lang, "famBlogsOverline"),
          hs(state.lang, "famBlogsTitle"),
          fam.center_url ? { url: fam.center_url, label: fam.center_label } : null
        )}
      </div>
    `;

    root.querySelectorAll("[data-fam-doc]").forEach((btn) => {
      btn.addEventListener("click", () => handleActionToken(`doc:${btn.dataset.famDoc}`));
    });
  }

  /* 4. DEDICATED IMMIGRATION LAW HUB */
  function renderImmigrationHub(ctx) {
    const { state, esc, handleActionToken } = ctx;
    const root = document.getElementById("immigrationHubRoot");
    const immi = state.bootstrap?.hubs?.immigration;
    if (!root || !immi) return;

    root.innerHTML = `
      <div class="hub-hero-banner immi-theme">
        <div class="hub-hero-main">
          <span class="pilot-verified num" style="color:#A8E2E6;">${esc(hs(state.lang, "immiHeroKicker"))}</span>
          <h2 class="hub-hero-title">${esc(hs(state.lang, "immiHeroTitle"))}</h2>
          <p class="hub-hero-desc">${esc(hs(state.lang, "immiHeroDesc"))}</p>
        </div>
        <div class="hub-hero-ctas">
          <a href="${esc(immi.visa_guide_url)}" target="_blank" rel="noopener" class="btn-primary">${esc(hs(state.lang, "openVisaGuideBtn"))}</a>
          <a href="${esc(immi.pdf_download_url)}" download class="btn-outline">${esc(hs(state.lang, "dlImmiPdfBtn"))}</a>
          <button type="button" class="btn-outline btn-sm" data-immi-doc="01_immi">${esc(hs(state.lang, "readImmiCookbookBtn"))}</button>
        </div>
      </div>

      <div class="feature-4-grid">
        ${(immi.guide_features || [])
          .map(
            (f) => `
          <div class="feature-card">
            <span class="section-overline num" style="color:#1F5A5E;">${esc(f.kicker)}</span>
            <h3 class="shelf-title">${esc(f.title)}</h3>
            <p class="shelf-sub">${esc(f.desc)}</p>
          </div>`
          )
          .join("")}
      </div>

      <div class="threshold-4-strip">
        ${(immi.key_thresholds || [])
          .map(
            (th) => `
          <div class="threshold-box">
            <span class="big-num num">${esc(th.num)}</span>
            <span style="font-size:12.5px;color:#E2DDD5;line-height:1.45;display:block;">${esc(th.label)}</span>
          </div>`
          )
          .join("")}
      </div>

      <div class="section-header-row" style="margin-bottom:12px;">
        <div>
          <span class="section-overline num">${esc(hs(state.lang, "immiEscOverline"))}</span>
          <h3 class="section-title">${esc(hs(state.lang, "immiEscTitle"))}</h3>
        </div>
      </div>

      <div class="pillars-3-grid">
        ${(immi.escalation_tracks || [])
          .map(
            (et) => `
          <div class="pillar-card" style="border-top-color:#0E3A3E;display:flex;flex-direction:column;justify-content:space-between;gap:14px;">
            <div>
              <span class="verdict-chip verdict-retain num">${esc(et.badge)}</span>
              <h4 class="shelf-title" style="margin-top:6px;">${esc(et.title)}</h4>
              <p class="shelf-sub">${esc(et.desc)}</p>
            </div>
            <a href="${esc(et.cta_url)}" target="_blank" rel="noopener" class="btn-primary btn-sm">${esc(et.cta_label)} ↗</a>
          </div>`
          )
          .join("")}
      </div>

      <div class="hub-blog-section">
        ${renderBlogGrid(immi.blogs, state.lang, hs(state.lang, "immiBlogsOverline"), hs(state.lang, "immiBlogsTitle"))}
      </div>
    `;

    root.querySelectorAll("[data-immi-doc]").forEach((btn) => {
      btn.addEventListener("click", () => handleActionToken(`doc:${btn.dataset.immiDoc}`));
    });
  }

  window.ParkCoHubs = {
    renderCostMatrix,
    renderClientWizard,
    renderEmploymentExtras,
    renderFamilyHub,
    renderImmigrationHub,
  };
})();
