/* Park & Co Lawyers · Public Self-Help Wizard, Cost-Protection Matrix & Practice Hubs
   Strictly enforces 0% Hangul in EN mode (?lang=en) and 100% client-first framing. */
(() => {
  "use strict";

  const HUB_STRINGS = {
    ko: {
      cmDiyKicker: "1단계 · 혼자 해결하면 변호사비를 아끼는 단계",
      cmInflectKicker: "2단계 · 혼자 진행을 멈추고 박앤코 변호사를 찾아야 할 순간",
      cmRiskKicker: "꼭 기억하세요 · 이 타이밍을 놓치면 생기는 손해",

      pracAll: "전체 보기 (13)",
      pracEmp: "월급·직장 문제 (5)",
      pracFam: "이혼·재산·자녀 (4)",
      pracImmi: "비자·영주권 (4)",
      whyHeading: "왜 이 방법으로 진행하는 게 나에게 가장 이득일까요?",
      stepsHeading: "지금 바로 따라 하실 순서",
      empPresetCustom: "직접 입력 · 계약서 시급을 내가 직접 적어 넣기",
      jumpDirBtn: "25개 업종 · 129개 직급 전체 시급표 보기 ↓",
      jumpDisambBtn: "헷갈리기 쉬운 업종 구분 & 주의할 판례 (4가지) ↓",
      quickSearchEmpty: "찾으시는 직무가 보이지 않아요. 한식당, 바리스타, 타일, 정육, 청소, 필라테스, NDIS처럼 쉬운 단어로 입력해 보세요.",
      quickLoadBtn: "이 시급 넣기",
      customModeTitle: "내 시급 직접 입력하기",
      customModeDesc: "근로계약서에 적힌 약정 시급이나 회사 단체협약(Enterprise Agreement) 시급을 아래 숫자 칸에 직접 적어 넣어 계산해 보세요.",
      lblTypicalJobs: "주로 어떤 일을 하나요?",
      lblClassRule: "이 직급에 해당하는 기준 (경력·자격증)",
      lblAllowances: "따로 챙겨야 할 수당",
      lblOtRule: "연장근무(오버타임) 시급 기준",
      lblTrapAlert: "사장님과 가장 자주 다투는 부분 & 법원 판례",
      openPayGuideBtn: "호주 정부 공식 시급표(PDF) ↗",
      openFwcAwardBtn: "업종 규정 원문 보기 ↗",
      disambOverline: "COVERAGE BOUNDARIES · FWA s 15AA · FEDERAL COURT & FWC PRECEDENTS",
      disambTitle: "내 일자리는 어떤 시급표를 써야 할까요? 가장 많이 헷갈리는 4가지 기준",
      dirOverline: "COMPLETE EMPIRICAL DIRECTORY · 25 INSTRUMENTS & 129 CLASSIFICATIONS (FY 2026–27)",
      dirTitle: "한인들이 많이 일하는 25개 업종 · 129개 직급 공식 시급표 (버튼 한 번으로 계산기에 넣기)",
      dirSub: "아래에서 일하신 업종이나 직무를 찾은 뒤 '계산기에 넣기 ↑' 버튼을 누르면 평일·주말·야간·연장근무 시급이 위 계산기에 자동으로 채워져요.",
      dirSearchPh: "업종·직무 검색하기 (예: 한식당, 요리사, 바리스타, 타일, 정육, 농장, 청소, 필라테스, NDIS, 치과, 어린이집, 물류...)",
      dirExpandAll: "모두 펼치기",
      dirCollapseAll: "모두 접기",
      dirThLevel: "직급 · 하는 일 · 자격 기준",
      dirThFt: "정규직 시급 (평일 / 토 / 일 / 공휴일)",
      dirThCas: "캐주얼 25% 시급 (평일 / 토 / 일 / 공휴일)",
      dirThEveOt: "저녁·야간 / 연장근무 시급",
      dirThAction: "계산기에 넣기",
      dirLoadBtn: "계산기에 넣기 ↑",
      dirLoadedToast: "선택하신 업종과 직급 시급이 위 계산기에 자동으로 들어갔어요.",
      dirPtNotePrefix: "파트타임 전용 시급(+15% 별도 적용): ",

      // Employment Payslip & Regulator Cards
      payslipOverline: "FWA ss 535–536 & reg 3.46 · s 557C REVERSE ONUS",
      payslipTitle: "급여명세서(페이슬립) 안 줬을 때 확인표 & 7일 내 지급 요청서 자동 작성기",
      payslipSub: "해당하는 항목에 체크하고 이름과 가게 법인명을 적으면 사장님에게 이메일이나 문자로 바로 보낼 수 있는 공식 지급 요청서(7일 기한)가 만들어져요.",
      lblWorkerName: "내 이름 (영문 권장)",
      phWorkerName: "예: Hong Gil Dong",
      lblEmployerName: "사장님 회사 법인명 (Pty Ltd / ABN)",
      phEmployerName: "예: ABC Hospitality Pty Ltd",
      lblWorkPeriod: "일한 기간",
      phWorkPeriod: "예: 2025.10 – 2026.06",
      copyDemandBtn: "완성된 7일 지급 요청서 복사하기",
      copiedDemandToast: "7일 내 급여명세서·밀린 월급 지급 요청서가 복사되었어요.",

      regOverline: "FREE GOVERNMENT REGULATORS · STATUTORY INVESTIGATION & PENALTY POWERS",
      regTitle: "가게 조사나 과태료 처분, 밀린 연금 추징을 원하신다면 정부 기관에 무료로 신고하세요",
      regSub: "일반 로펌이나 변호사에게는 사업장을 압수수색하거나 세무조사·과태료를 매길 권한이 없어요. 사장님이 법적 제재를 받게 하거나 밀린 퇴직연금을 국세청이 대신 받아주길 원하실 때는 비싼 변호사비를 쓰지 마시고 아래 호주 정부 기관에 무료로 신고해 보세요.",
      openAgencyBtn: "정부 무료 신고 페이지 열기 ↗",

      empBlogsOverline: "CURATED EMPLOYMENT LAW GUIDES & CASE COLUMNS",
      empBlogsTitle: "밀린 월급 받기 · 해고 후 21일 대처 · 페이슬립 권리 쉬운 칼럼 모음",
      readBlogCta: "글 읽어보기 ↗",
      readColumnCta: "판례 이야기 읽기 →",

      // Family Hub
      famHeroKicker: "AUSTRALIAN FAMILY LAW · s 48 NO-FAULT SYSTEM & SETTLEMENT GUIDE",
      famHeroTitle: "누가 잘못했는지 다투느라 재산을 깎아먹지 마시고 법원 도장 받은 합의서와 재산 확인에 집중하세요",
      famHeroDesc: "호주 가족법(s 48)은 배우자의 외도나 잘못을 따져 위자료를 주는 제도가 아니에요. 그래서 잘잘못을 가리려고 싸움이 길어질수록 두 사람이 나눌 소중한 재산만 변호사비로 빠져나가요. 간단한 온라인 이혼과 초기 자녀 양육 조정은 아래 요약과 03번 설명서로 직접 진행하시고, 합의한 내용을 법원 명령서(Consent Orders)로 확실히 못 박을 때나 연락을 피하며 재산을 숨기는 배우자를 협상 자리로 불러내야 할 때 박앤코를 찾아 주세요.",
      dlFamPdfBtn: "03번 가족법 요약 PDF 받기",
      readFamCookbookBtn: "03번 가족법 설명서 전체 읽기",
      openFamJotformHeroBtn: "가족법 온라인 상담 질문지 작성 ↗",

      famTracksOverline: "WHEN LEGAL REPRESENTATION PROTECTS YOUR EQUITY · 2 KEY INFLECTION POINTS",
      famTracksTitle: "호주 이혼·재산분할에서 변호사를 선임하는 것이 내 재산을 지켜 주는 두 가지 순간",
      famChecklistOverline: "PRE-CONSULTATION READINESS CHECK · FASTER & MORE ACCURATE ADVICE",
      famChecklistTitle: "가족법 상담 신청 전 30초 준비물 확인",
      famChecklistSub: "아래 세 가지만 미리 메모해 두시면 첫 검토부터 훨씬 빠르고 정확하게 내 몫과 해결 방법을 안내받으실 수 있어요.",
      famJotformCtaBtn: "가족법 온라인 상담 질문지 열기 ↗",
      famBlogsOverline: "CURATED FAMILY LAW DEEP-DIVE COLUMNS",
      famBlogsTitle: "부모님 지원금 · 가족신탁 · 합의명령 · 파트너비자 결별 실제 판례 이야기",

      // Immigration Hub
      immiHeroKicker: "STEP #1 FREE SELF-CHECK · 714 OCCUPATIONS, CV MATCHING & PR POINTS",
      immiHeroTitle: "내 경력으로 어떤 호주 비자·영주권이 될까? 상담비 쓰기 전에 무료로 먼저 확인해 보세요",
      immiHeroDesc: "처음 비자 방향을 알아볼 때부터 비싼 유료 상담비를 쓰실 필요가 없어요. 박앤코가 무료로 공개한 비자 솔루션 가이드에서 714개 직업군과 숨은 까다로운 조건(Caveat)을 먼저 찾아보세요. 내 이력서(CV)를 서버 저장 없이 안전하게 대조해 보고 영주권 점수 계산기와 48편의 전문변호사 설명 영상까지 한자리에서 챙기실 수 있어요.",
      openVisaGuideBtn: "무료 호주 비자 솔루션 가이드 열기 ↗",
      dlImmiPdfBtn: "01번 이민 서류 요약 PDF 받기",
      readImmiCookbookBtn: "01번 이민 설명서 전체 읽기",

      immiEscOverline: "QLS ACCREDITED SPECIALIST · CRITICAL LEGAL INFLECTION POINTS",
      immiEscTitle: "단 하루만 늦거나 서류 한 줄만 잘못 내도 돌이킬 수 없는 순간, 이때는 꼭 전문변호사와 상의하세요",
      immiBlogsOverline: "CURATED IMMIGRATION COLUMNS · AUSSIELIFE.ORG & PARK & CO",
      immiBlogsTitle: "2026–27 스폰서 연봉($79,423) · 비자 거절 · 재심(ART) 실제 판례 이야기",
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
      phEmployerName: "e.g. ABC Hospitality Pty Ltd",
      lblWorkPeriod: "Employment Period",
      phWorkPeriod: "e.g. Oct 2025 – Jun 2026",
      copyDemandBtn: "Copy 7-Day Statutory Demand Letter",
      copiedDemandToast: "7-day statutory payslip & wage demand letter copied to clipboard.",

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
              <span class="num" style="font-size:12.5px;font-weight:700;color:#7A1F2B;">${esc(ctaLbl)}</span>
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

  function buildPayslipDemandText(lang, worker, employer, period, awardLabel, shortfallsStr, checkedItems) {
    if (lang === "en") {
      const bullets = checkedItems.map((x) => `- ${x}`).join("\n");
      const awLine = awardLabel ? `\nApplicable Modern Award & Classification: ${awardLabel}` : "";
      return `STATUTORY DEMAND FOR PAYSLIPS, EMPLOYMENT RECORDS & UNDERPAYMENT RECTIFICATION
(Fair Work Act 2009 (Cth) ss 535, 536 & 557C; Fair Work Regulations 2009 reg 3.46)

To: ${employer || "(Employer Legal Entity Pty Ltd & ABN)"}
From: ${worker || "(Employee Full Name)"}
Employment Period: ${period || "(Employment Start – End Dates)"}${awLine}

1. Notice of Statutory Payslip & Record-Keeping Breaches
During the above employment period, you failed to comply with mandatory obligations under ss 535–536 of the Fair Work Act 2009 (Cth) and reg 3.46 of the Fair Work Regulations 2009, specifically:
${bullets}

2. Formal 7-Day Demand & Reverse Onus Warning (FWA s 557C)
Take notice that under section 557C of the Fair Work Act 2009, where an employer fails to make/keep employment records or issue compliant payslips without reasonable excuse, the legal burden of disproving my wage calculation shifts onto the employer in Court proceedings.

Within seven (7) calendar days of this notice, please:
(a) Issue complete, accurate payslips and time/wage records for the entire employment period; and
(b) Remit my self-calculated gross underpayment and 12% OTE Superannuation shortfall (${shortfallsStr || "per attached Schedule of Underpayment"}).

If unresolved within 7 days, I intend to lodge a Fair Work Ombudsman regulatory complaint, an ATO unpaid superannuation report, and/or Federal Circuit and Family Court (Form 5) recovery proceedings without further notice.`;
    }

    const bulletsKo = checkedItems.map((x) => `• ${x}`).join("\n");
    const awLineKo = awardLabel ? `\n적용 업종 시급표 및 직급: ${awardLabel}` : "";
    return `공식 지급 요청서: 급여명세서(Payslip)·근무기록 전달 및 미지급 임금 정산 요청 (7일 기한)
(관련 법령: 호주 공정근로법 Fair Work Act 2009 ss 535, 536 및 s 557C 입증책임 전환 규정)

받는 분 (고용주 법인명 및 ABN): ${employer || "(가게 간판 이름이 아닌 정식 Pty Ltd 법인명 및 ABN 입력)"}
보내는 분 (근로자 이름): ${worker || "(근로자 영문 이름 입력)"}
근무 기간: ${period || "(근무 시작일 ~ 종료일)"}${awLineKo}

1. 급여명세서 발급 및 근무기록 보관 의무 미이행 안내 (Fair Work Act ss 535–536, reg 3.46)
귀 사업장은 위 근무 기간 동안 호주 공정근로법이 정한 아래 의무를 지키지 않았습니다:
${bulletsKo}

2. 7일 이내 서류 전달·미지급액 정산 요청 및 법원 입증책임 안내 (s 557C)
호주 공정근로법 제557C조에 따라 고용주가 정당한 사유 없이 급여명세서를 발급하지 않거나 근무기록을 보관하지 않은 경우 재판에서는 근로자가 정리한 근무시간과 미지급 금액이 틀렸다는 점을 고용주가 직접 증거로 입증해야 합니다.

이 요청서를 받으신 날로부터 7일(달력 기준) 안에 아래 두 가지를 이행해 주시기 바랍니다:
(가) 전체 근무 기간의 정확한 급여명세서(Payslip)와 출퇴근·급여 지급 기록 사본 전달
(나) 본인이 법정 시급 기준으로 계산한 미지급 급여 및 12% 퇴직연금(Super) 합계(${shortfallsStr || "첨부한 계산표 참조"}) 전액 입금

7일 안에 정산이 이루어지지 않을 경우 별도 연락 없이 호주 공정근로옴부즈만(Fair Work Ombudsman) 신고와 호주 국세청(ATO) 미납 연금 신고 및 연방순회·가족법원 소액청구(Form 5) 절차를 진행할 예정임을 알려드립니다.`;
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
          <span class="insp-box-label num" style="color:#7A1F2B;">${esc(hs(state.lang, "lblTrapAlert"))}</span>
          <div style="font-size:13px;line-height:1.55;color:#2B1A1D;">${fmtInlineMd(cleanTrap(aw.trap), esc)}</div>
        </div>
      `;
    };

    const loadLevelIntoCalculator = (awardCode, levelId, { scroll = false } = {}) => {
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
                <strong style="display:block;font-size:13.5px;color:#1A1211;">${esc(lv.title)}</strong>
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
          : `현재 ${matchedAwards.length}개 업종 · ${totalMatchedLevels}개 세부 직급 보는 중`;

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
                                  <strong style="color:#1A1211;">${esc(lv.title)}</strong>
                                  <div style="font-size:12.5px;color:#7A1F2B;font-weight:700;margin-top:2px;">${fmtInlineMd(lv.jobs, esc)}</div>
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
                                  <strong style="color:#7A1F2B;">$${lv.casual.mf.toFixed(2)}</strong> / $${lv.casual.sat.toFixed(2)} / <strong>$${lv.casual.sun.toFixed(2)}</strong> / $${lv.casual.ph.toFixed(2)}
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
      dualEl.innerHTML = `
        <div class="hub-panel-card">
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

          <textarea id="psDemandPreview" class="email-textarea" readonly style="min-height:185px;margin-bottom:10px;"></textarea>
          <button type="button" class="btn-primary" id="psCopyDemandBtn">${esc(hs(state.lang, "copyDemandBtn"))}</button>
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
                  <strong style="font-size:14.5px;color:#1A1211;">${esc(r.agency)}</strong>
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

      const refreshDemand = () => {
        const w = document.getElementById("psWorkerInput")?.value.trim() || "";
        const e = document.getElementById("psEmployerInput")?.value.trim() || "";
        const p = document.getElementById("psPeriodInput")?.value.trim() || "";
        const selected = [];
        dualEl.querySelectorAll("[data-ps-check]").forEach((cb) => {
          if (cb.checked) {
            const idx = parseInt(cb.dataset.psCheck, 10);
            if (checks[idx]) selected.push(checks[idx]);
          }
        });
        const chosen = selected.length ? selected : [checks[0]];
        const preview = document.getElementById("psDemandPreview");
        if (preview) {
          preview.value = buildPayslipDemandText(
            state.lang,
            w,
            e,
            p,
            state.selectedAwardLabel || "",
            state.lastCalculatedSummaryAmount || "",
            chosen
          );
        }
      };

      ["psWorkerInput", "psEmployerInput", "psPeriodInput"].forEach((id) => {
        document.getElementById(id)?.addEventListener("input", refreshDemand);
      });
      dualEl.querySelectorAll("[data-ps-check]").forEach((cb) => {
        cb.addEventListener("change", refreshDemand);
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
          <div class="pillar-card" style="border-top-color:#7A1F2B;display:flex;flex-direction:column;justify-content:space-between;gap:14px;">
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
