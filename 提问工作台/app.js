const templateButtons = document.querySelectorAll(".template-chip");
const tagButtons = document.querySelectorAll("#answer-tags .toggle-tag");
const creativeFocusButtons = document.querySelectorAll(".creative-focus-tag");
const softwareFocusButtons = document.querySelectorAll(".software-focus-tag");

const goalField = document.getElementById("goal");
const contextField = document.getElementById("context");
const materialsField = document.getElementById("materials");
const constraintsField = document.getElementById("constraints");
const attemptsField = document.getElementById("attempts");
const depthField = document.getElementById("depth");
const depthLabel = document.getElementById("depth-label");
const toneField = document.getElementById("tone");

const modeIndicator = document.getElementById("mode-indicator");
const panelTip = document.getElementById("panel-tip");
const composerTitle = document.getElementById("composer-title");
const suggestionsTitle = document.getElementById("suggestions-title");
const previewTitle = document.getElementById("preview-title");

const goalLabel = document.getElementById("goal-label");
const contextLabel = document.getElementById("context-label");
const materialsLabel = document.getElementById("materials-label");
const constraintsLabel = document.getElementById("constraints-label");
const attemptsLabel = document.getElementById("attempts-label");

const previewOutput = document.getElementById("preview-output");
const clarityValue = document.getElementById("clarity-value");
const suggestionsList = document.getElementById("suggestions");
const summaryLine = document.getElementById("summary-line");
const missingLine = document.getElementById("missing-line");
const copyButton = document.getElementById("copy-button");
const compactButton = document.getElementById("compact-button");
const resetButton = document.getElementById("reset-button");

const creativeStudio = document.getElementById("creative-studio");
const creativeDeliverableField = document.getElementById("creative-deliverable");
const creativeStageField = document.getElementById("creative-stage");
const draftField = document.getElementById("draft");
const creativeIntensityField = document.getElementById("creative-intensity");
const creativeIntensityLabel = document.getElementById("creative-intensity-label");
const creativeOutput = document.getElementById("creative-output");
const creativePlan = document.getElementById("creative-plan");
const creativePrompt = document.getElementById("creative-prompt");
const creativeChecklist = document.getElementById("creative-checklist");
const copyCreativeButton = document.getElementById("copy-creative-button");

const softwareStudio = document.getElementById("software-studio");
const softwareProductField = document.getElementById("software-product");
const softwarePlatformField = document.getElementById("software-platform");
const softwareStageField = document.getElementById("software-stage");
const softwareStackField = document.getElementById("software-stack");
const softwareModulesField = document.getElementById("software-modules");
const softwareIntegrationsField = document.getElementById("software-integrations");
const softwareScopeField = document.getElementById("software-scope");
const softwareScopeLabel = document.getElementById("software-scope-label");
const softwareOutput = document.getElementById("software-output");
const softwarePlan = document.getElementById("software-plan");
const softwareStructure = document.getElementById("software-structure");
const softwarePrompt = document.getElementById("software-prompt");
const softwareChecklist = document.getElementById("software-checklist");
const softwareCodexPrompt = document.getElementById("software-codex-prompt");
const softwareCursorPrompt = document.getElementById("software-cursor-prompt");
const softwareChatgptPrompt = document.getElementById("software-chatgpt-prompt");
const copySoftwareButton = document.getElementById("copy-software-button");

const templates = {
  study: {
    mode: "ask",
    modeLabel: "提问优化模式",
    composerTitle: "组织你的问题",
    suggestionsTitle: "提问提升建议",
    previewTitle: "生成后的提问",
    tip: "切换模板会替换占位提示，不会清空你已经输入的内容。",
    labels: {
      goal: "你想解决什么？",
      context: "已有背景",
      materials: "关键材料",
      constraints: "限制条件",
      attempts: "你已经试过什么？"
    },
    placeholders: {
      goal: "例如：我想在 3 天内搞懂某个概念，并能独立做题。",
      context: "例如：我是大一学生，已经学过基础内容，但这部分总是混淆。",
      materials: "例如：老师给了课件、两道例题、一次测验错题。",
      constraints: "例如：请用高中生也能看懂的话解释，不要默认我知道专业术语。",
      attempts: "例如：我看过课件，但还是分不清几个相似概念。"
    },
    defaultTags: ["分步骤方案", "先给核心结论", "举例说明", "指出常见误区"],
    summaryFallback: "帮我把这个学习问题梳理清楚。"
  },
  writing: {
    mode: "ask",
    modeLabel: "提问优化模式",
    composerTitle: "组织你的写作需求",
    suggestionsTitle: "润色提问建议",
    previewTitle: "生成后的提问",
    tip: "写作润色更适合贴原句、对象、语气目标，让输出直接落到文字层。",
    labels: {
      goal: "你想把这段文字改成什么样？",
      context: "使用场景",
      materials: "原文或样本",
      constraints: "字数 / 语气 / 边界",
      attempts: "你已改过哪些版本？"
    },
    placeholders: {
      goal: "例如：我想把这段话改得更自然、更有说服力。",
      context: "例如：这是发给老师、客户或同学的说明，需要礼貌但不要太官腔。",
      materials: "例如：贴上原文，并说明对象是谁、你最想强调什么。",
      constraints: "例如：控制在 200 字内，不要夸张，也不要太口语。",
      attempts: "例如：我自己改过一版，但逻辑和语气还是不够顺。"
    },
    defaultTags: ["先给核心结论", "举例说明", "可直接复制模板", "提供改写稿"],
    summaryFallback: "帮我把这段文字改得更顺、更准。"
  },
  coding: {
    mode: "ask",
    modeLabel: "提问优化模式",
    composerTitle: "组织你的排错信息",
    suggestionsTitle: "排错提问建议",
    previewTitle: "生成后的提问",
    tip: "代码排错尽量贴报错、复现步骤和环境信息，答案会更接近可执行修复。",
    labels: {
      goal: "你想定位或修复什么问题？",
      context: "项目背景 / 运行环境",
      materials: "报错 / 代码 / 输入输出",
      constraints: "改动范围限制",
      attempts: "你已经排查过什么？"
    },
    placeholders: {
      goal: "例如：我想定位报错原因，并拿到能直接修改的方案。",
      context: "例如：这是一个前端页面、后端接口或脚本任务，运行环境是 Windows + Node。",
      materials: "例如：贴报错信息、关键代码、输入输出和复现步骤。",
      constraints: "例如：优先做最小改动，不要重写整套项目。",
      attempts: "例如：我检查过依赖、路径和变量名，但问题还在。"
    },
    defaultTags: ["分步骤方案", "先给核心结论", "可直接复制模板", "指出常见误区"],
    summaryFallback: "帮我定位这个技术问题并给出可执行修复。"
  },
  decision: {
    mode: "ask",
    modeLabel: "提问优化模式",
    composerTitle: "组织你的比较需求",
    suggestionsTitle: "决策提问建议",
    previewTitle: "生成后的提问",
    tip: "做方案对比时，把你真正关心的指标写清楚，避免得到泛泛而谈的推荐。",
    labels: {
      goal: "你想比较并决定什么？",
      context: "预算 / 场景 / 当前水平",
      materials: "备选项或现有资料",
      constraints: "必须满足的条件",
      attempts: "你已做过哪些比较？"
    },
    placeholders: {
      goal: "例如：我想比较几种方案，并选出最适合我的一个。",
      context: "例如：我的预算、时间、使用场景和当前水平分别是什么。",
      materials: "例如：列出方案 A/B/C，或贴你已经整理好的优缺点。",
      constraints: "例如：请只比较我真正关心的指标，不要泛泛而谈。",
      attempts: "例如：我做过初步对比，但拿不准该优先看什么。"
    },
    defaultTags: ["表格对比", "先给核心结论", "分步骤方案"],
    summaryFallback: "帮我比较几个方案并给出结论。"
  },
  creative: {
    mode: "creative",
    modeLabel: "编辑创作模式",
    composerTitle: "组织你的创作任务",
    suggestionsTitle: "编辑创作建议",
    previewTitle: "生成后的创作指令",
    tip: "编辑创作模式会开启原稿工位，并同步生成创作路线、改写提示和检查清单。",
    labels: {
      goal: "这次创作要达成什么？",
      context: "世界观 / 人物 / 场景",
      materials: "已有提纲 / 设定 / 素材",
      constraints: "风格边界 / 平台限制",
      attempts: "目前卡在哪里？"
    },
    placeholders: {
      goal: "例如：我想续写这一章，让男女主的关系更紧张，同时埋下下一章的反转。",
      context: "例如：故事发生在现代都市，女主刚发现男主隐藏身份，两人还不能彻底摊牌。",
      materials: "例如：贴现有大纲、人物设定、必须保留的情节点或参考语气。",
      constraints: "例如：保持女频向、情绪浓度高、单章 2500 字左右，不写过度说明。",
      attempts: "例如：我试着写过，但节奏拖、对白像解释，不够有张力。"
    },
    defaultTags: ["分步骤方案", "先给核心结论", "提供改写稿", "标出删改位"],
    summaryFallback: "帮我推进这次创作，并给出可执行的编辑方案。",
    creativeDefaults: {
      deliverable: "章节续写",
      stage: "精修",
      intensity: 3,
      focus: ["节奏", "角色", "对白"]
    }
  },
  software: {
    mode: "software",
    modeLabel: "软件编写模式",
    composerTitle: "组织你的软件需求",
    suggestionsTitle: "软件需求建议",
    previewTitle: "生成后的开发指令",
    tip: "软件编写模式会把你的想法整理成可直接交给 AI 开发助手的软件需求、蓝图、目录结构和验收清单。",
    labels: {
      goal: "你想做什么软件？",
      context: "用户 / 场景 / 业务背景",
      materials: "参考软件 / 流程 / 原型",
      constraints: "平台 / 预算 / 时间 / 技术限制",
      attempts: "你已有的想法或尝试"
    },
    placeholders: {
      goal: "例如：我想做一个 Windows 桌面软件，帮助我批量整理小说角色卡并导出成 Word。",
      context: "例如：主要给我自己和两位编辑用，需要低学习成本，离线也能工作。",
      materials: "例如：参考 Notion 的列表体验、表单结构、导出样式，或贴你已有流程。",
      constraints: "例如：优先本地运行，不依赖服务器，开发周期先控制在 1 周内。",
      attempts: "例如：我想过用 Excel 做，但录入效率低，也不好统一导出格式。"
    },
    defaultTags: ["分步骤方案", "先给核心结论", "给出目录结构", "给出验收标准", "列出接口设计"],
    summaryFallback: "帮我把这个软件需求整理成可直接开发的说明。",
    softwareDefaults: {
      product: "桌面软件",
      platform: "Windows",
      stage: "MVP 验证",
      scope: 3,
      focus: ["流程", "数据", "可维护性"]
    }
  }
};

const depthLabels = {
  1: "极简",
  2: "简洁",
  3: "平衡",
  4: "详细",
  5: "深入"
};

const creativeIntensityLabels = {
  1: "轻编辑",
  2: "微调增强",
  3: "平衡调整",
  4: "明显改写",
  5: "重构改写"
};

const softwareScopeLabels = {
  1: "先做雏形",
  2: "核心功能优先",
  3: "平衡实现",
  4: "接近可用版本",
  5: "尽量完整"
};

const stageStrategies = {
  "立项": "先锁定题眼、受众和卖点，再扩展人物关系与主冲突，避免一开始就写散。",
  "起稿": "先排场景节拍和段落任务，再填对白与细节，优先保证推进而不是辞藻。",
  "精修": "先压缩重复解释，再强化转折、动作和情绪落点，让段落更有推力。",
  "交稿前": "统一措辞、专名、标点和平台阅读节奏，确保成稿在细节层面干净可靠。"
};

const focusChecklistMap = {
  "节奏": "段落推进是否连续，是否有过长解释拖慢故事。",
  "角色": "角色欲望与选择是否明确，行为有没有偏离既定设定。",
  "对白": "对白是否能区分说话人，是否减少解释型复述。",
  "情绪": "情绪变化是否有动作或细节托住，而不是只靠旁白说明。",
  "画面": "场景是否有具体动作、环境与感官信息，而不是空泛描述。",
  "结构": "中段是否有有效转折、信息更新或关系变化。",
  "商业感": "钩子、卖点和章节结尾是否服务目标受众的继续阅读欲望。"
};

const softwareStageStrategies = {
  "MVP 验证": "先完成最短用户闭环，只做必需功能，确认软件是否真能解决核心问题。",
  "可用版本": "在 MVP 基础上补齐稳定流程、基础容错和必要配置，确保别人也能顺手用。",
  "上线版本": "补齐异常处理、权限、日志、部署说明和数据边界，降低交付风险。",
  "长期迭代": "从结构、扩展性和维护成本出发设计模块边界，避免后期难以演进。"
};

const softwareFocusChecklistMap = {
  "界面": "界面层级是否清晰，用户是否能在 3 步内进入关键功能。",
  "流程": "主流程是否完整闭环，是否存在卡住用户的断点。",
  "数据": "数据结构、字段、保存策略和导入导出路径是否明确。",
  "权限": "角色、登录、访问控制和敏感操作限制是否定义清楚。",
  "性能": "批量操作、列表加载、搜索和导出是否考虑性能边界。",
  "部署": "安装、运行环境、依赖、打包与更新方式是否明确。",
  "可维护性": "模块边界、命名、目录结构和后续扩展点是否预留。"
};

let currentTemplate = "study";
let isCompactMode = false;
let creativeSeeded = false;
let softwareSeeded = false;

function trimValue(value) {
  return value.trim();
}

function isCreativeMode() {
  return currentTemplate === "creative";
}

function isSoftwareMode() {
  return currentTemplate === "software";
}

function getSelectedTags() {
  return Array.from(tagButtons)
    .filter((button) => button.classList.contains("is-selected"))
    .map((button) => button.dataset.tag);
}

function getSelectedFocus(buttons, key) {
  return Array.from(buttons)
    .filter((button) => button.classList.contains("is-selected"))
    .map((button) => button.dataset[key]);
}

function setSelectedTags(defaultTags) {
  tagButtons.forEach((button) => {
    button.classList.toggle("is-selected", defaultTags.includes(button.dataset.tag));
  });
}

function setSelectedButtons(buttons, values, key) {
  buttons.forEach((button) => {
    button.classList.toggle("is-selected", values.includes(button.dataset[key]));
  });
}

function getValues() {
  return {
    goal: trimValue(goalField.value),
    context: trimValue(contextField.value),
    materials: trimValue(materialsField.value),
    constraints: trimValue(constraintsField.value),
    attempts: trimValue(attemptsField.value),
    tone: toneField.value
  };
}

function getCreativeValues() {
  return {
    deliverable: creativeDeliverableField.value,
    stage: creativeStageField.value,
    draft: trimValue(draftField.value),
    intensity: Number(creativeIntensityField.value),
    focus: getSelectedFocus(creativeFocusButtons, "focus")
  };
}

function getSoftwareValues() {
  return {
    product: softwareProductField.value,
    platform: softwarePlatformField.value,
    stage: softwareStageField.value,
    stack: trimValue(softwareStackField.value),
    modules: trimValue(softwareModulesField.value),
    integrations: trimValue(softwareIntegrationsField.value),
    scope: Number(softwareScopeField.value),
    focus: getSelectedFocus(softwareFocusButtons, "focus")
  };
}

function computeCompletenessScore(values, tags, creativeValues, softwareValues) {
  let score = 10;

  if (values.goal) score += 20;
  if (values.context) score += 12;
  if (values.materials) score += 12;
  if (values.constraints) score += 12;
  if (values.attempts) score += 8;
  if (tags.length >= 2) score += 8;
  if (values.tone) score += 6;
  if (values.goal.length > 28) score += 4;

  if (isCreativeMode()) {
    if (creativeValues.draft) score += 8;
    if (creativeValues.focus.length >= 2) score += 6;
    if (creativeValues.intensity >= 3) score += 2;
    if (values.materials.length > 35 || creativeValues.draft.length > 70) score += 4;
  }

  if (isSoftwareMode()) {
    if (softwareValues.modules) score += 8;
    if (softwareValues.integrations) score += 8;
    if (softwareValues.stack) score += 4;
    if (softwareValues.focus.length >= 2) score += 4;
    if (softwareValues.modules.length > 30) score += 2;
  }

  return Math.min(score, 100);
}

function buildAskSuggestions(values, tags) {
  const suggestions = [];

  if (!values.goal) {
    suggestions.push("先写清楚你最终想得到什么结果，而不是只写“帮我看看”。");
  }

  if (!values.context) {
    suggestions.push("补一段背景，说明你的身份、场景或当前水平，答案会少走弯路。");
  }

  if (!values.materials) {
    suggestions.push("如果有题目、原文、报错、截图内容，尽量转成文字贴上来。");
  }

  if (!values.constraints) {
    suggestions.push("把时间、字数、预算、不能改动的部分写清楚，回答会更贴边界。");
  }

  if (!values.attempts) {
    suggestions.push("写出你已经试过什么，可以减少重复建议。");
  }

  if (tags.length < 2) {
    suggestions.push("勾选你想要的回答形态，比如先结论、举例或可复制模板。");
  }

  if (values.goal && values.goal.length < 18) {
    suggestions.push("目标可以再具体一点，最好补上期限、对象或判断标准。");
  }

  if (!suggestions.length) {
    suggestions.push("信息已经比较完整了，现在生成的提问通常会更聚焦。");
    suggestions.push("如果还想继续优化，可以再补一个成功标准或失败风险。");
  }

  return suggestions.slice(0, 4);
}

function buildCreativeSuggestions(values, tags, creativeValues) {
  const suggestions = [];

  if (!values.goal) {
    suggestions.push("先写明这次创作要落地什么成果，例如续写一章、重写开头或补全人物小传。");
  }

  if (!values.context) {
    suggestions.push("补上主角关系、场景阶段和当下冲突，AI 才能接住你的故事脉络。");
  }

  if (!values.materials && !creativeValues.draft) {
    suggestions.push("至少提供一份提纲或原稿片段，否则只能得到偏泛化的创作建议。");
  }

  if (!values.constraints) {
    suggestions.push("把题材、平台、字数、禁区和语气边界写清楚，能明显减少跑偏。");
  }

  if (!values.attempts) {
    suggestions.push("说明你已经卡了多久、卡在哪一层，系统更容易判断是结构问题还是句子问题。");
  }

  if (creativeValues.focus.length < 2) {
    suggestions.push("至少勾 2 个重点打磨项，比如节奏、对白、情绪，让工单更像编辑指令。");
  }

  if (tags.length < 2) {
    suggestions.push("把输出形式选清楚，例如要求提供改写稿、删改位或分步骤方案。");
  }

  if (!suggestions.length) {
    suggestions.push("这份创作输入已经能支撑一轮像样的编辑反馈了。");
    suggestions.push("下一步可以继续补充角色口吻样本或必须保留的高光桥段。");
  }

  return suggestions.slice(0, 4);
}

function buildSoftwareSuggestions(values, tags, softwareValues) {
  const suggestions = [];

  if (!values.goal) {
    suggestions.push("先写明你要做什么软件，以及它替谁解决什么问题。");
  }

  if (!values.context) {
    suggestions.push("补充目标用户、使用场景和使用频率，开发方案会更像真实产品而不是抽象工具。");
  }

  if (!softwareValues.modules) {
    suggestions.push("至少列出 3 到 5 个核心模块、页面或操作流程，便于拆解功能边界。");
  }

  if (!softwareValues.integrations) {
    suggestions.push("写清楚数据怎么来、怎么存、是否要导入导出，或是否接外部 API。");
  }

  if (!values.materials) {
    suggestions.push("如果有参考软件、原型图、字段表、页面草图或竞品体验，尽量贴出来。");
  }

  if (!values.constraints) {
    suggestions.push("把平台、预算、开发时间、是否联网、是否多人使用这类限制讲清楚。");
  }

  if (!softwareValues.stack) {
    suggestions.push("如果你有技术偏好，直接写出来；没有也可以写“不限”，系统会更好给栈建议。");
  }

  if (softwareValues.focus.length < 2) {
    suggestions.push("至少勾选 2 个重点关注项，例如流程、数据、部署，这会影响蓝图和验收标准。");
  }

  if (tags.length < 2) {
    suggestions.push("建议勾上目录结构、验收标准或接口设计，输出会更接近真实开发工单。");
  }

  if (!suggestions.length) {
    suggestions.push("这份软件需求已经足够支撑一轮像样的开发规划。");
    suggestions.push("如果还想更稳，可以补上字段明细、角色权限或部署环境。");
  }

  return suggestions.slice(0, 4);
}

function buildSuggestions(values, tags, creativeValues, softwareValues) {
  if (isCreativeMode()) {
    return buildCreativeSuggestions(values, tags, creativeValues);
  }

  if (isSoftwareMode()) {
    return buildSoftwareSuggestions(values, tags, softwareValues);
  }

  return buildAskSuggestions(values, tags);
}

function buildAskPreview(values, tags) {
  const depthText = depthLabels[Number(depthField.value)];
  const tagText = tags.length ? tags.join("、") : "先给核心结论";
  const summary = values.goal || templates[currentTemplate].summaryFallback;

  if (isCompactMode) {
    return [
      `请帮我处理这个问题：${summary}`,
      values.context ? `背景：${values.context}` : "",
      values.materials ? `材料：${values.materials}` : "",
      values.constraints ? `限制：${values.constraints}` : "",
      values.attempts ? `我已尝试：${values.attempts}` : "",
      `请用“${values.tone}”的方式回答，深度偏“${depthText}”，尽量包含：${tagText}。`
    ].filter(Boolean).join("\n");
  }

  return [
    "请根据下面的信息回答我的问题。如果信息不足，请先指出最关键的缺口，再给我一个临时可执行的答案。",
    "",
    "1. 我的目标",
    values.goal || "请先帮我把问题目标问清楚。",
    "",
    "2. 当前背景",
    values.context || "背景信息还不完整，请结合常见场景推断，并告诉我最该补哪部分。",
    "",
    "3. 我能提供的材料",
    values.materials || "我还没有整理好材料，请先告诉我最值得补充的文本信息。",
    "",
    "4. 限制条件",
    values.constraints || "请默认优先给出成本低、执行快、容易理解的方案。",
    "",
    "5. 我已经尝试过的内容",
    values.attempts || "我还没有系统尝试过，请按新手起步的方式作答。",
    "",
    "6. 回答要求",
    `请使用“${values.tone}”的风格回答，回答深度偏“${depthText}”，并尽量包含：${tagText}。`
  ].join("\n");
}

function buildCreativePreview(values, tags, creativeValues) {
  const depthText = depthLabels[Number(depthField.value)];
  const intensityText = creativeIntensityLabels[creativeValues.intensity];
  const tagText = tags.length ? tags.join("、") : "先给核心结论";
  const focusText = creativeValues.focus.length ? creativeValues.focus.join("、") : "节奏、角色、对白";
  const summary = values.goal || templates.creative.summaryFallback;

  if (isCompactMode) {
    return [
      `你现在是我的中文编辑，请帮助我完成这次创作任务：${summary}`,
      `交付物：${creativeValues.deliverable}；阶段：${creativeValues.stage}；编辑强度：${intensityText}；重点：${focusText}。`,
      values.context ? `背景：${values.context}` : "",
      values.materials ? `已有素材：${values.materials}` : "",
      creativeValues.draft ? `原稿片段：${creativeValues.draft}` : "",
      values.constraints ? `限制：${values.constraints}` : "",
      values.attempts ? `当前卡点：${values.attempts}` : "",
      `请先判断最该改的 3 个位置，再按“${values.tone}”的方式输出，深度偏“${depthText}”，尽量包含：${tagText}。`
    ].filter(Boolean).join("\n");
  }

  return [
    "请作为我的中文编辑与创作搭档，基于以下信息推进这次内容创作；如果原稿存在明显结构问题，请先指出，再给出可执行改写。",
    "",
    "1. 创作目标",
    values.goal || "请先帮我明确这次创作任务最该达成的结果。",
    "",
    "2. 世界观 / 人物 / 场景背景",
    values.context || "我还没把故事背景写全，请根据常见创作场景推断，并告诉我最需要补充哪块。",
    "",
    "3. 已有素材与设定",
    values.materials || "我暂时没整理完整素材，请先指出最关键的设定缺口。",
    "",
    "4. 风格边界与限制",
    values.constraints || "请默认优先保留可读性、情绪张力和商业表达，不做偏题的炫技。",
    "",
    "5. 当前卡点",
    values.attempts || "我还没有系统拆解问题，请帮我判断是结构、节奏还是表达层面卡住。",
    "",
    "6. 创作工位设置",
    `交付物：${creativeValues.deliverable}`,
    `阶段：${creativeValues.stage}`,
    `编辑强度：${intensityText}`,
    `重点打磨：${focusText}`,
    "",
    "7. 原稿片段或已有提纲",
    creativeValues.draft || "当前还没有贴原稿，请先给一版结构方案和示范方向。",
    "",
    "8. 输出要求",
    `请使用“${values.tone}”的语气，回答深度偏“${depthText}”，并尽量包含：${tagText}。`
  ].join("\n");
}

function buildSoftwarePreview(values, tags, softwareValues) {
  const depthText = depthLabels[Number(depthField.value)];
  const scopeText = softwareScopeLabels[softwareValues.scope];
  const tagText = tags.length ? tags.join("、") : "先给核心结论";
  const focusText = softwareValues.focus.length ? softwareValues.focus.join("、") : "流程、数据、可维护性";
  const stackText = softwareValues.stack || "请你根据需求推荐合适技术栈";
  const summary = values.goal || templates.software.summaryFallback;

  if (isCompactMode) {
    return [
      `你现在是我的产品经理兼全栈开发助手，请根据以下需求帮我规划并编写这款软件：${summary}`,
      `交付形式：${softwareValues.product}；平台：${softwareValues.platform}；阶段：${softwareValues.stage}；实现力度：${scopeText}。`,
      values.context ? `用户与场景：${values.context}` : "",
      softwareValues.modules ? `核心模块：${softwareValues.modules}` : "",
      softwareValues.integrations ? `数据与集成：${softwareValues.integrations}` : "",
      values.materials ? `参考资料：${values.materials}` : "",
      values.constraints ? `限制：${values.constraints}` : "",
      values.attempts ? `已有想法：${values.attempts}` : "",
      `技术偏好：${stackText}；重点关注：${focusText}。请用“${values.tone}”的方式输出，深度偏“${depthText}”，尽量包含：${tagText}。`
    ].filter(Boolean).join("\n");
  }

  return [
    "请作为我的资深产品经理兼全栈工程师，根据以下需求帮助我规划并编写对应软件。如果信息不足，请先指出最关键的缺口，再给出可执行的 MVP 方案和实现建议。",
    "",
    "1. 软件目标",
    values.goal || "请先帮我明确要做的软件到底解决什么问题。",
    "",
    "2. 用户与使用场景",
    values.context || "用户和场景还不完整，请结合常见软件产品思路，指出我最该补充的使用场景信息。",
    "",
    "3. 参考资料 / 原型 / 流程",
    values.materials || "我暂时没有完整参考资料，请先告诉我最值得补齐的是页面流程、字段表还是竞品参考。",
    "",
    "4. 约束条件",
    values.constraints || "请默认优先选择开发成本低、上手快、便于迭代的方案。",
    "",
    "5. 我已有的想法或尝试",
    values.attempts || "我还没有形成完整方案，请按从 0 到 1 的思路为我拆解。",
    "",
    "6. 产品工位设置",
    `交付形式：${softwareValues.product}`,
    `目标平台：${softwareValues.platform}`,
    `开发阶段：${softwareValues.stage}`,
    `实现力度：${scopeText}`,
    `技术栈偏好：${stackText}`,
    `重点关注：${focusText}`,
    "",
    "7. 核心模块 / 页面 / 流程",
    softwareValues.modules || "我还没有列清核心模块，请先给我一版合理的 MVP 模块拆分。",
    "",
    "8. 数据、接口或外部集成",
    softwareValues.integrations || "暂时还没明确数据和接口，请先给出最保守可行的数据方案和集成边界。",
    "",
    "9. 输出要求",
    `请使用“${values.tone}”的语气，回答深度偏“${depthText}”，并尽量包含：${tagText}。如果适合，请直接给我开发步骤、目录结构、接口设计和验收标准。`
  ].join("\n");
}

function buildPreview(values, tags, creativeValues, softwareValues) {
  if (isCreativeMode()) {
    return buildCreativePreview(values, tags, creativeValues);
  }

  if (isSoftwareMode()) {
    return buildSoftwarePreview(values, tags, softwareValues);
  }

  return buildAskPreview(values, tags);
}

function buildMissingMessage(values, creativeValues, softwareValues) {
  const missing = [];

  if (!values.goal) missing.push("目标");
  if (!values.context) missing.push(isCreativeMode() ? "人物/场景背景" : isSoftwareMode() ? "用户/场景" : "背景");
  if (!values.constraints) missing.push("限制");
  if (!values.materials) missing.push(isCreativeMode() ? "设定/素材" : isSoftwareMode() ? "参考资料" : "材料");

  if (isCreativeMode() && !creativeValues.draft) {
    missing.push("原稿片段");
  }

  if (isSoftwareMode()) {
    if (!softwareValues.modules) missing.push("核心模块");
    if (!softwareValues.integrations) missing.push("数据/接口");
  }

  if (!missing.length) {
    if (isCreativeMode()) {
      return "核心输入已经够用了，可以直接进入一轮编辑创作。";
    }

    if (isSoftwareMode()) {
      return "核心需求已经够用了，可以直接进入一轮开发规划。";
    }

    return "核心信息已经齐了，可以直接发给 AI。";
  }

  return `还可以补：${missing.slice(0, 3).join("、")}。`;
}

function buildSummary(values, creativeValues, softwareValues) {
  if (isCreativeMode()) {
    const focusText = creativeValues.focus.length ? creativeValues.focus.join(" / ") : "待补重点";
    return `${creativeValues.deliverable} / ${creativeValues.stage} / ${focusText}`;
  }

  if (isSoftwareMode()) {
    const focusText = softwareValues.focus.length ? softwareValues.focus.join(" / ") : "待补重点";
    return `${softwareValues.product} / ${softwareValues.platform} / ${focusText}`;
  }

  return values.goal || templates[currentTemplate].summaryFallback;
}

function buildCreativePlan(values, creativeValues) {
  const intensityText = creativeIntensityLabels[creativeValues.intensity];
  const focusText = creativeValues.focus.length ? creativeValues.focus.join("、") : "节奏、角色、对白";
  const stageLine = stageStrategies[creativeValues.stage];
  const hasDraft = Boolean(creativeValues.draft);
  const goalText = values.goal || "先明确这轮创作的核心成果。";

  return [
    "工单概览",
    `交付物：${creativeValues.deliverable}`,
    `阶段：${creativeValues.stage}`,
    `编辑强度：${intensityText}`,
    `优先焦点：${focusText}`,
    "",
    "建议流程",
    `1. 先锁定这轮必须完成的结果：${goalText}`,
    `2. ${stageLine}`,
    `3. 围绕“${focusText}”逐段处理，优先保留你已给出的素材和必须保留的桥段。`,
    hasDraft
      ? "4. 原稿已提供，先做结构诊断，再进入局部改写，避免只修辞不修问题。"
      : "4. 目前没有原稿，先给出章节骨架或段落节拍，再进入句子层改写。",
    "5. 完成主体后，再回收语气、字数、平台规范和违禁边界。",
    "",
    "本轮优先产出",
    "- 一版可直接推进的成稿或骨架",
    "- 一份删改说明",
    "- 一条下一轮最值得继续追问的问题"
  ].join("\n");
}

function buildCreativePrompt(values, tags, creativeValues) {
  const intensityText = creativeIntensityLabels[creativeValues.intensity];
  const tagText = tags.length ? tags.join("、") : "先给核心结论";
  const focusText = creativeValues.focus.length ? creativeValues.focus.join("、") : "节奏、角色、对白";

  return [
    "请按编辑工作流处理我的原稿。",
    `任务：${creativeValues.deliverable}`,
    `阶段：${creativeValues.stage}`,
    `重点：${focusText}`,
    `编辑强度：${intensityText}`,
    values.goal ? `目标：${values.goal}` : "目标：先帮我定义这轮创作最该达成的结果。",
    values.constraints ? `边界：${values.constraints}` : "边界：优先保留可读性与情绪张力。",
    `输出：${tagText}`,
    "请先指出最关键的 3 个问题，再给一版可直接使用的输出。"
  ].join("\n");
}

function buildCreativeChecklist(values, creativeValues) {
  const items = [];

  items.push("开头是否尽快进入冲突、卖点或关键关系变化。");
  items.push("每个场景是否只承担一个主要推进任务，避免信息堆叠。");
  items.push("限制条件、平台规范和目标字数是否被满足。");

  if (creativeValues.stage === "立项") {
    items.push("一句话卖点是否成立，主角关系和主冲突是否有持续张力。");
  }

  if (creativeValues.stage === "起稿") {
    items.push("章节结尾是否留下继续阅读的牵引，而不是平着收住。");
  }

  if (creativeValues.stage === "精修") {
    items.push("是否删除重复解释，改用动作、对白和细节承载信息。");
  }

  if (creativeValues.stage === "交稿前") {
    items.push("错别字、标点、专名和称谓是否统一，段落长度是否适合目标平台阅读。");
  }

  creativeValues.focus.forEach((focus) => {
    if (focusChecklistMap[focus]) {
      items.push(focusChecklistMap[focus]);
    }
  });

  if (!values.materials && !creativeValues.draft) {
    items.push("补一段原稿或提纲，否则编辑建议会停留在泛化层。");
  }

  return Array.from(new Set(items)).slice(0, 7);
}

function buildSoftwarePlan(values, softwareValues) {
  const scopeText = softwareScopeLabels[softwareValues.scope];
  const focusText = softwareValues.focus.length ? softwareValues.focus.join("、") : "流程、数据、可维护性";
  const stageLine = softwareStageStrategies[softwareValues.stage];
  const stackText = softwareValues.stack || "由开发助手按需求推荐技术栈";
  const goalText = values.goal || "先明确这款软件最关键的业务结果。";

  return [
    "工单概览",
    `交付形式：${softwareValues.product}`,
    `目标平台：${softwareValues.platform}`,
    `开发阶段：${softwareValues.stage}`,
    `实现力度：${scopeText}`,
    `技术偏好：${stackText}`,
    `重点关注：${focusText}`,
    "",
    "建议流程",
    `1. 先定义最短可用闭环：${goalText}`,
    `2. ${stageLine}`,
    "3. 先拆核心模块、主页面和用户流程，再补异常处理与边界情况。",
    softwareValues.modules
      ? `4. 围绕这些模块推进：${softwareValues.modules}`
      : "4. 先补一版 MVP 模块树，再决定目录结构和页面划分。",
    softwareValues.integrations
      ? `5. 数据与集成边界：${softwareValues.integrations}`
      : "5. 先定义本地数据结构、导入导出方案和外部接口边界。",
    "6. 最后回收技术栈、部署方式、测试策略和验收口径。",
    "",
    "本轮优先产出",
    "- 一份功能拆解与页面/模块清单",
    "- 一版适合 AI 直接开写代码的开发提示词",
    "- 一组可核对的验收标准"
  ].join("\n");
}

function inferSoftwareFolders(softwareValues) {
  const product = softwareValues.product;
  const platform = softwareValues.platform;

  if (product.includes("桌面") || platform === "Windows") {
    return {
      app: "src/app/",
      ui: "src/ui/",
      features: "src/features/",
      data: "src/data/",
      main: "src/main/",
      bridge: "src/bridge/",
      tests: "tests/"
    };
  }

  if (product.includes("Web") || platform.includes("Web")) {
    return {
      app: "src/app/",
      ui: "src/components/",
      features: "src/features/",
      data: "src/services/",
      main: "src/pages/",
      bridge: "src/api/",
      tests: "tests/"
    };
  }

  if (product.includes("移动") || platform.includes("Android")) {
    return {
      app: "src/app/",
      ui: "src/screens/",
      features: "src/features/",
      data: "src/services/",
      main: "src/navigation/",
      bridge: "src/integrations/",
      tests: "tests/"
    };
  }

  return {
    app: "src/app/",
    ui: "src/ui/",
    features: "src/features/",
    data: "src/data/",
    main: "src/modules/",
    bridge: "src/integrations/",
    tests: "tests/"
  };
}

function buildSoftwareStructure(values, softwareValues) {
  const folders = inferSoftwareFolders(softwareValues);
  const stackHint = softwareValues.stack || "推荐技术栈待定";
  const integrationHint = softwareValues.integrations ? "integrations/ 或 services/ 中实现外部连接" : "先以内置数据流为主";

  return [
    "project-root/",
    "  README.md",
    "  package.json",
    "  .env.example",
    "  docs/",
    "    prd.md",
    "    api-spec.md",
    "    acceptance-checklist.md",
    "  public/",
    `  ${folders.app}`,
    "    index.(ts|js)",
    "    routes.(ts|js)",
    "    config/",
    `  ${folders.ui}`,
    "    common/",
    "    layouts/",
    `  ${folders.features}`,
    "    auth/",
    "    dashboard/",
    "    editor/",
    "    export/",
    `  ${folders.data}`,
    "    storage/",
    "    models/",
    "    repositories/",
    `  ${folders.main}`,
    "    home/",
    "    settings/",
    `  ${folders.bridge}`,
    "    api-client/",
    "    adapters/",
    `  ${folders.tests}`,
    "    unit/",
    "    integration/",
    "  scripts/",
    "    build/",
    "    release/",
    "",
    "目录说明",
    `- 技术栈提示：${stackHint}`,
    `- 数据 / 集成实现建议：${integrationHint}`,
    values.goal ? `- 目录应优先服务这个核心目标：${values.goal}` : "- 目录结构应围绕主流程和核心闭环组织。"
  ].join("\n");
}

function buildSoftwarePrompt(values, tags, softwareValues) {
  const scopeText = softwareScopeLabels[softwareValues.scope];
  const tagText = tags.length ? tags.join("、") : "先给核心结论";
  const focusText = softwareValues.focus.length ? softwareValues.focus.join("、") : "流程、数据、可维护性";
  const stackText = softwareValues.stack || "请你根据需求选择最合适的技术栈";

  return [
    "请作为高级产品经理兼全栈开发助手，基于以下需求直接开始规划并编写这款软件。",
    `软件类型：${softwareValues.product}`,
    `目标平台：${softwareValues.platform}`,
    `开发阶段：${softwareValues.stage}`,
    `实现力度：${scopeText}`,
    `技术栈：${stackText}`,
    `重点关注：${focusText}`,
    values.goal ? `目标：${values.goal}` : "目标：请先定义这款软件必须完成的核心价值。",
    values.context ? `用户与场景：${values.context}` : "用户与场景：请先根据常见软件使用方式补出合理假设。",
    softwareValues.modules ? `核心模块：${softwareValues.modules}` : "核心模块：请先给一版 MVP 模块划分。",
    softwareValues.integrations ? `数据与集成：${softwareValues.integrations}` : "数据与集成：请优先给出最保守可行的本地数据方案。",
    values.constraints ? `限制：${values.constraints}` : "限制：优先低成本、快交付、便于迭代。",
    `输出要求：${tagText}`,
    "请先给出开发蓝图，再给目录结构、核心实现步骤和验收标准。"
  ].join("\n");
}

function buildAgentPrompt(agentName, values, softwareValues, structureText) {
  const stackText = softwareValues.stack || "请根据需求自行判断最合适的技术栈";
  const modulesText = softwareValues.modules || "请先拆出 MVP 模块";
  const integrationsText = softwareValues.integrations || "请先定义最保守可行的数据与集成方案";
  const focusText = softwareValues.focus.length ? softwareValues.focus.join("、") : "流程、数据、可维护性";
  const scopeText = softwareScopeLabels[softwareValues.scope];

  if (agentName === "Codex") {
    return [
      "你现在是 Codex，需要直接在代码库中实现这个软件需求。",
      `目标：${values.goal || "请先明确软件的核心价值并开始实现。"}`,
      `产品类型：${softwareValues.product}；平台：${softwareValues.platform}；阶段：${softwareValues.stage}；实现力度：${scopeText}`,
      `技术栈：${stackText}`,
      `用户场景：${values.context || "请按常见真实场景补出合理假设。"}`,
      `核心模块：${modulesText}`,
      `数据与集成：${integrationsText}`,
      `限制：${values.constraints || "优先最小可行实现，不做无关重构。"}`,
      `重点关注：${focusText}`,
      "请先阅读现有项目结构，再按下面的目录建议实现：",
      structureText,
      "输出时请优先给出：",
      "1. 你准备修改的模块",
      "2. 实现顺序",
      "3. 已完成的代码变更",
      "4. 未完成风险与后续步骤"
    ].join("\n");
  }

  if (agentName === "Cursor") {
    return [
      "你现在是 Cursor AI，请在当前工程里协助完成这款软件。",
      `我想做的软件：${values.goal || "请先定义核心目标。"}`,
      `平台与形态：${softwareValues.product} / ${softwareValues.platform}`,
      `开发阶段：${softwareValues.stage}；实现力度：${scopeText}`,
      `技术栈偏好：${stackText}`,
      `用户与场景：${values.context || "请按真实用户流程自行补齐必要假设。"}`,
      `核心模块：${modulesText}`,
      `数据与接口：${integrationsText}`,
      `限制条件：${values.constraints || "优先完成 MVP，避免无关扩展。"}`,
      `关注重点：${focusText}`,
      "请先产出任务拆解，再按目录建议写代码：",
      structureText,
      "如果信息不足，请先向我指出最关键缺口，然后继续给出可落地代码方案。"
    ].join("\n");
  }

  return [
    "你现在是 ChatGPT，请作为资深产品经理和全栈工程师帮助我从需求到实现规划这款软件。",
    `软件目标：${values.goal || "请先帮我定义核心目标。"}`,
    `产品形态：${softwareValues.product}；目标平台：${softwareValues.platform}`,
    `开发阶段：${softwareValues.stage}；实现力度：${scopeText}`,
    `技术栈偏好：${stackText}`,
    `用户场景：${values.context || "请根据常见使用场景补出合理假设。"}`,
    `核心模块：${modulesText}`,
    `数据与集成：${integrationsText}`,
    `限制：${values.constraints || "优先低成本、快交付、可迭代。"}`,
    `关注重点：${focusText}`,
    "请按以下顺序输出：",
    "1. 核心功能拆解",
    "2. 页面 / 模块清单",
    "3. 建议项目目录结构",
    "4. 技术选型理由",
    "5. 开发步骤",
    "6. 验收标准",
    "目录建议如下：",
    structureText
  ].join("\n");
}

function buildSoftwareChecklist(values, softwareValues) {
  const items = [];

  items.push("是否已经覆盖主用户从进入软件到完成关键任务的完整流程。");
  items.push("功能边界是否清楚，哪些是 MVP，哪些应该延后到下一版。");
  items.push("平台、预算、开发周期和联网/离线限制是否被满足。");

  if (softwareValues.stage === "MVP 验证") {
    items.push("是否只保留最关键闭环，而没有把非核心功能提前做复杂。");
  }

  if (softwareValues.stage === "可用版本") {
    items.push("是否补上基础错误提示、空状态、保存反馈和配置入口。");
  }

  if (softwareValues.stage === "上线版本") {
    items.push("是否考虑日志、权限、异常恢复、打包发布和升级路径。");
  }

  if (softwareValues.stage === "长期迭代") {
    items.push("是否预留模块边界、接口抽象和后续扩展位，避免后面重写。");
  }

  softwareValues.focus.forEach((focus) => {
    if (softwareFocusChecklistMap[focus]) {
      items.push(softwareFocusChecklistMap[focus]);
    }
  });

  if (softwareValues.integrations) {
    items.push("外部 API、导入导出、数据库或第三方服务的失败路径是否考虑清楚。");
  }

  if (!softwareValues.modules) {
    items.push("补充一版模块树、页面清单或用户流程，否则开发提示词仍会偏空泛。");
  }

  if (!values.materials) {
    items.push("补一份参考产品、原型或字段示例，能显著提升 AI 写代码时的贴合度。");
  }

  return Array.from(new Set(items)).slice(0, 8);
}

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(value);
  }

  return new Promise((resolve, reject) => {
    const helper = document.createElement("textarea");
    helper.value = value;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();

    try {
      document.execCommand("copy");
      document.body.removeChild(helper);
      resolve();
    } catch (error) {
      document.body.removeChild(helper);
      reject(error);
    }
  });
}

function syncModeVisibility() {
  const creativeMode = isCreativeMode();
  const softwareMode = isSoftwareMode();

  creativeStudio.hidden = !creativeMode;
  creativeOutput.hidden = !creativeMode;
  softwareStudio.hidden = !softwareMode;
  softwareOutput.hidden = !softwareMode;
}

function seedCreativeDefaults(template) {
  if (!template.creativeDefaults) {
    return;
  }

  if (!creativeSeeded) {
    creativeDeliverableField.value = template.creativeDefaults.deliverable;
    creativeStageField.value = template.creativeDefaults.stage;
    creativeIntensityField.value = String(template.creativeDefaults.intensity);
    setSelectedButtons(creativeFocusButtons, template.creativeDefaults.focus, "focus");
    creativeSeeded = true;
  } else if (!getSelectedFocus(creativeFocusButtons, "focus").length) {
    setSelectedButtons(creativeFocusButtons, template.creativeDefaults.focus, "focus");
  }
}

function seedSoftwareDefaults(template) {
  if (!template.softwareDefaults) {
    return;
  }

  if (!softwareSeeded) {
    softwareProductField.value = template.softwareDefaults.product;
    softwarePlatformField.value = template.softwareDefaults.platform;
    softwareStageField.value = template.softwareDefaults.stage;
    softwareScopeField.value = String(template.softwareDefaults.scope);
    setSelectedButtons(softwareFocusButtons, template.softwareDefaults.focus, "focus");
    softwareSeeded = true;
  } else if (!getSelectedFocus(softwareFocusButtons, "focus").length) {
    setSelectedButtons(softwareFocusButtons, template.softwareDefaults.focus, "focus");
  }
}

function setTemplate(templateKey) {
  currentTemplate = templateKey;
  const template = templates[templateKey];

  goalLabel.textContent = template.labels.goal;
  contextLabel.textContent = template.labels.context;
  materialsLabel.textContent = template.labels.materials;
  constraintsLabel.textContent = template.labels.constraints;
  attemptsLabel.textContent = template.labels.attempts;

  goalField.placeholder = template.placeholders.goal;
  contextField.placeholder = template.placeholders.context;
  materialsField.placeholder = template.placeholders.materials;
  constraintsField.placeholder = template.placeholders.constraints;
  attemptsField.placeholder = template.placeholders.attempts;

  modeIndicator.textContent = template.modeLabel;
  panelTip.textContent = template.tip;
  composerTitle.textContent = template.composerTitle;
  suggestionsTitle.textContent = template.suggestionsTitle;
  previewTitle.textContent = template.previewTitle;

  templateButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.template === templateKey);
  });

  setSelectedTags(template.defaultTags);
  syncModeVisibility();

  if (template.mode === "creative") {
    seedCreativeDefaults(template);
  }

  if (template.mode === "software") {
    seedSoftwareDefaults(template);
  }

  updatePreview();
}

function updatePreview() {
  const values = getValues();
  const tags = getSelectedTags();
  const creativeValues = getCreativeValues();
  const softwareValues = getSoftwareValues();
  const completenessScore = computeCompletenessScore(values, tags, creativeValues, softwareValues);
  const suggestions = buildSuggestions(values, tags, creativeValues, softwareValues);
  const previewText = buildPreview(values, tags, creativeValues, softwareValues);

  clarityValue.textContent = `${completenessScore}%`;
  depthLabel.textContent = depthLabels[Number(depthField.value)];
  creativeIntensityLabel.textContent = creativeIntensityLabels[Number(creativeIntensityField.value)];
  softwareScopeLabel.textContent = softwareScopeLabels[Number(softwareScopeField.value)];
  previewOutput.textContent = previewText;
  summaryLine.textContent = buildSummary(values, creativeValues, softwareValues);
  missingLine.textContent = buildMissingMessage(values, creativeValues, softwareValues);
  suggestionsList.innerHTML = suggestions.map((item) => `<li>${item}</li>`).join("");

  if (isCreativeMode()) {
    creativePlan.textContent = buildCreativePlan(values, creativeValues);
    creativePrompt.textContent = buildCreativePrompt(values, tags, creativeValues);
    creativeChecklist.innerHTML = buildCreativeChecklist(values, creativeValues)
      .map((item) => `<li>${item}</li>`)
      .join("");
  } else {
    creativePlan.textContent = "";
    creativePrompt.textContent = "";
    creativeChecklist.innerHTML = "";
  }

  if (isSoftwareMode()) {
    const structureText = buildSoftwareStructure(values, softwareValues);

    softwarePlan.textContent = buildSoftwarePlan(values, softwareValues);
    softwareStructure.textContent = structureText;
    softwarePrompt.textContent = buildSoftwarePrompt(values, tags, softwareValues);
    softwareChecklist.innerHTML = buildSoftwareChecklist(values, softwareValues)
      .map((item) => `<li>${item}</li>`)
      .join("");
    softwareCodexPrompt.textContent = buildAgentPrompt("Codex", values, softwareValues, structureText);
    softwareCursorPrompt.textContent = buildAgentPrompt("Cursor", values, softwareValues, structureText);
    softwareChatgptPrompt.textContent = buildAgentPrompt("ChatGPT", values, softwareValues, structureText);
  } else {
    softwarePlan.textContent = "";
    softwareStructure.textContent = "";
    softwarePrompt.textContent = "";
    softwareChecklist.innerHTML = "";
    softwareCodexPrompt.textContent = "";
    softwareCursorPrompt.textContent = "";
    softwareChatgptPrompt.textContent = "";
  }
}

templateButtons.forEach((button) => {
  button.addEventListener("click", () => setTemplate(button.dataset.template));
});

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-selected");
    updatePreview();
  });
});

creativeFocusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-selected");
    updatePreview();
  });
});

softwareFocusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-selected");
    updatePreview();
  });
});

[goalField, contextField, materialsField, constraintsField, attemptsField, depthField, toneField].forEach((field) => {
  field.addEventListener("input", updatePreview);
  field.addEventListener("change", updatePreview);
});

[creativeDeliverableField, creativeStageField, draftField, creativeIntensityField].forEach((field) => {
  field.addEventListener("input", updatePreview);
  field.addEventListener("change", updatePreview);
});

[softwareProductField, softwarePlatformField, softwareStageField, softwareStackField, softwareModulesField, softwareIntegrationsField, softwareScopeField].forEach((field) => {
  field.addEventListener("input", updatePreview);
  field.addEventListener("change", updatePreview);
});

compactButton.addEventListener("click", () => {
  isCompactMode = !isCompactMode;
  compactButton.textContent = isCompactMode ? "切换完整版" : "切换精简版";
  updatePreview();
});

copyButton.addEventListener("click", async () => {
  const originalLabel = copyButton.textContent;

  try {
    await copyText(previewOutput.textContent);
    copyButton.textContent = "已复制";
  } catch (error) {
    copyButton.textContent = "复制失败";
  }

  window.setTimeout(() => {
    copyButton.textContent = originalLabel;
  }, 1500);
});

copyCreativeButton.addEventListener("click", async () => {
  const originalLabel = copyCreativeButton.textContent;
  const payload = [
    "创作路线",
    creativePlan.textContent,
    "",
    "改写提示",
    creativePrompt.textContent,
    "",
    "检查清单",
    Array.from(creativeChecklist.querySelectorAll("li"))
      .map((item, index) => `${index + 1}. ${item.textContent}`)
      .join("\n")
  ].join("\n");

  try {
    await copyText(payload);
    copyCreativeButton.textContent = "已复制";
  } catch (error) {
    copyCreativeButton.textContent = "复制失败";
  }

  window.setTimeout(() => {
    copyCreativeButton.textContent = originalLabel;
  }, 1500);
});

copySoftwareButton.addEventListener("click", async () => {
  const originalLabel = copySoftwareButton.textContent;
  const payload = [
    "开发蓝图",
    softwarePlan.textContent,
    "",
    "项目目录结构",
    softwareStructure.textContent,
    "",
    "通用编程提示词",
    softwarePrompt.textContent,
    "",
    "Codex 提示词",
    softwareCodexPrompt.textContent,
    "",
    "Cursor 提示词",
    softwareCursorPrompt.textContent,
    "",
    "ChatGPT 提示词",
    softwareChatgptPrompt.textContent,
    "",
    "验收清单",
    Array.from(softwareChecklist.querySelectorAll("li"))
      .map((item, index) => `${index + 1}. ${item.textContent}`)
      .join("\n")
  ].join("\n");

  try {
    await copyText(payload);
    copySoftwareButton.textContent = "已复制";
  } catch (error) {
    copySoftwareButton.textContent = "复制失败";
  }

  window.setTimeout(() => {
    copySoftwareButton.textContent = originalLabel;
  }, 1500);
});

resetButton.addEventListener("click", () => {
  goalField.value = "";
  contextField.value = "";
  materialsField.value = "";
  constraintsField.value = "";
  attemptsField.value = "";
  draftField.value = "";
  softwareStackField.value = "";
  softwareModulesField.value = "";
  softwareIntegrationsField.value = "";
  depthField.value = "3";
  toneField.value = toneField.options[0].value;
  creativeSeeded = false;
  softwareSeeded = false;
  setSelectedButtons(creativeFocusButtons, [], "focus");
  setSelectedButtons(softwareFocusButtons, [], "focus");
  isCompactMode = false;
  compactButton.textContent = "切换精简版";
  setTemplate(currentTemplate);
});

setTemplate(currentTemplate);
