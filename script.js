'use strict';

const papers = [
  {
    id: 'tqs', short: 'TQS', year: '2026', selected: true,
    title: 'Quality, Not Just Outcome: A Structural Scoring Framework for Selecting Coding-Agent Trajectories for Supervised Fine-Tuning',
    authors: ['Sida Li', 'Yuanxin Liu', 'Shicheng Li', 'Linli Yao', 'Xu Sun', 'Haoli Bai', 'Xiao-Hui Li'],
    venue: 'Findings of EMNLP 2026', role: ['第一作者', 'First author'],
    description: ['从 155,144 条成功轨迹中筛选适合 Coding Agent 监督微调的数据。TQS 根据轨迹结构衡量过程质量，无需 LLM 评审，并在 SWE-bench Verified 上验证了筛选效果。', 'TQS selects coding-agent supervision from 155,144 successful trajectories using structural process signals, without an LLM judge. We evaluate the selected data on SWE-bench Verified.'],
    result: ['SWE-bench Verified pass@1：27.6%（Top-TQS） / 24.8%（随机筛选）', 'SWE-bench Verified pass@1: 27.6% (Top-TQS) / 24.8% (random selection)'],
    paper: 'https://arxiv.org/abs/2610.13152', code: 'https://github.com/DuHeng0128/TQS',
    bib: '@article{li2026quality,\n  title={Quality, Not Just Outcome: A Structural Scoring Framework for Selecting Coding-Agent Trajectories for Supervised Fine-Tuning},\n  author={Li, Sida and Liu, Yuanxin and Li, Shicheng and Yao, Linli and Sun, Xu and Bai, Haoli and Li, Xiao-Hui},\n  journal={arXiv preprint arXiv:2610.13152},\n  year={2026},\n  url={https://arxiv.org/abs/2610.13152}\n}'
  },
  {
    id: 'adac', short: 'AdaC-GRPO', year: '2026', selected: true,
    title: 'AdaC-GRPO: Towards Mastering Long-Horizon Visual Sudoku Puzzles via Adaptive Curriculum Learning',
    authors: ['Sida Li', 'Yuanxin Liu', 'Linli Yao', 'Shicheng Li', 'Xu Sun', 'Haoli Bai', 'Xiao-Hui Li'],
    venue: 'Findings of EMNLP 2026', role: ['第一作者', 'First author'],
    description: ['针对长程视觉推理中的稀疏奖励，构建细粒度数独评测 FG-Sudoku，并根据在线 Rollout 的表现调整训练难度，使模型持续获得有效的学习信号。', 'We introduce FG-Sudoku and an adaptive curriculum for long-horizon visual reasoning. Online rollout accuracy guides task difficulty to address sparse rewards during reinforcement learning.'],
    result: ['Qwen2.5-VL-7B：9×9 数独准确率 21.89%，标准 GRPO 为 3.91%', 'Qwen2.5-VL-7B: 21.89% accuracy on 9×9 Sudoku, versus 3.91% for standard GRPO'],
    paper: 'https://arxiv.org/abs/2610.13184', code: 'https://github.com/DuHeng0128/AdaC-GRPO',
    bib: '@article{li2026adac,\n  title={AdaC-GRPO: Towards Mastering Long-Horizon Visual Sudoku Puzzles via Adaptive Curriculum Learning},\n  author={Li, Sida and Liu, Yuanxin and Yao, Linli and Li, Shicheng and Sun, Xu and Bai, Haoli and Li, Xiao-Hui},\n  journal={arXiv preprint arXiv:2610.13184},\n  year={2026},\n  url={https://arxiv.org/abs/2610.13184}\n}'
  },
  {
    id: 'ge', short: 'GE-Adapter', year: '2026', selected: true,
    title: 'GE-adapter: A General and Efficient Adapter for Enhanced Video Editing with Pretrained Text-to-Image Diffusion Models',
    authors: ['Yangfan He', 'Sida Li', 'Kun Li', 'Jianhui Wang', 'Binxu Li', 'Tianyu Shi', 'Yi Xin', 'Keqin Li', 'Jun Yin', 'Miao Zhang', 'Xueqian Wang'],
    venue: 'Expert Systems with Applications · 298, 129649', role: ['共同第一作者', 'Co-first author'],
    description: ['在预训练文生图扩散模型上加入轻量级 Adapter，结合时序、空间和语义一致性建模，用于视频编辑。我负责核心算法实现、训练流程搭建与消融实验。', 'A lightweight adapter for video editing with pretrained text-to-image diffusion models, modeling temporal, spatial and semantic consistency. I worked on the core implementation, training pipeline and ablation studies.'],
    paper: 'https://doi.org/10.1016/j.eswa.2025.129649', code: 'https://github.com/codepassionor/T2I_Adapter',
    bib: '@article{he2026geadapter,\n  title={GE-adapter: A general and efficient adapter for enhanced video editing with pretrained text-to-image diffusion models},\n  author={He, Yangfan and Li, Sida and Li, Kun and Wang, Jianhui and Li, Binxu and Shi, Tianyu and Xin, Yi and Li, Keqin and Yin, Jun and Zhang, Miao and Wang, Xueqian},\n  journal={Expert Systems with Applications},\n  volume={298},\n  pages={129649},\n  year={2026},\n  doi={10.1016/j.eswa.2025.129649}\n}'
  },
  {
    id: 'camera', short: 'Camera motion', year: '2026', selected: false,
    title: 'Trajectory-Enhanced Camera Motion Understanding for Multimodal Large Language Models',
    authors: ['Yuanxin Liu', 'Sida Li', 'Kun Ouyang', 'Shicheng Li', 'Linli Yao', 'Xu Sun', 'Weike Jin'],
    venue: 'ICASSP 2026', role: ['第二作者', 'Second author'],
    description: ['结合轨迹信息研究多模态大模型的相机运动理解。', 'Camera motion understanding for multimodal large language models using trajectory information.'],
    paper: 'https://doi.org/10.1109/ICASSP55912.2026.11462312'
  },
  {
    id: 'timechat', short: 'TimeChat-Online', year: '2025', selected: false,
    title: 'TimeChat-Online: 80% Visual Tokens are Naturally Redundant in Streaming Videos',
    authors: ['Linli Yao', 'Yicheng Li', 'Yuancheng Wei', 'Lei Li', 'Shuhuai Ren', 'Yuanxin Liu', 'Kun Ouyang', 'Lean Wang', 'Shicheng Li', 'Sida Li', 'Lingpeng Kong', 'Qi Liu', 'Yuanxing Zhang', 'Xu Sun'],
    venue: 'ACM Multimedia 2025', role: ['合作作者', 'Co-author'],
    description: ['通过差分 Token 丢弃减少流式视频中的视觉冗余，用于实时视频理解。', 'Differential Token Drop reduces visual redundancy for real-time understanding of streaming video.'],
    paper: 'https://arxiv.org/abs/2504.17343', code: 'https://github.com/yaolinli/TimeChat-Online', project: 'https://timechat-online.github.io/'
  },
  {
    id: 'survey', short: 'Token compression', year: '2026', selected: false,
    title: 'Towards Efficient Multimodal Large Language Models: A Survey on Token Compression',
    authors: ['Linli Yao', 'Long Xing', 'Yang Shi', 'Sida Li', 'Yuanxin Liu', 'Yuhao Dong', 'Yi-Fan Zhang', 'Lei Li', 'et al.'],
    venue: 'TechRxiv preprint · 2026', role: ['合作作者', 'Co-author'],
    description: ['梳理多模态大语言模型的 Token 压缩方法及其效率与性能权衡。', 'A survey of token compression in multimodal LLMs and its efficiency–performance trade-offs.'],
    paper: 'https://doi.org/10.36227/techrxiv.176823010.07236701/v1'
  },
  {
    id: 'mdanet', short: 'MDANet', year: '2025', selected: false,
    title: 'MDANet: A Multi-Stage Domain Adaptation Framework for Generalizable Low-Light Image Enhancement',
    authors: ['Jianhui Wang', 'Yangfan He', 'Kun Li', 'Sida Li', 'Lan Zhao', 'Jun Yin', 'Miao Zhang', 'Tianyu Shi', 'Xueqian Wang'],
    venue: 'Neurocomputing · 2025', role: ['合作作者', 'Co-author'],
    description: ['以多阶段领域自适应改善低光图像增强模型的跨域泛化。', 'Multi-stage domain adaptation for generalizable low-light image enhancement.'],
    paper: 'https://www.sciencedirect.com/science/article/pii/S0925231225002449'
  },
  {
    id: 'prompt', short: 'Prompt adaptor', year: '2024', selected: false,
    title: 'Prompt Learning Based Adaptor for Enhanced Video Editing with Pretrained Text-to-Image Diffusion Models',
    authors: ['Yangfan He', 'Sida Li', 'Jianhui Wang'],
    venue: 'NeurIPS 2024 Workshop on Adaptive Foundation Models · Poster', role: ['共同第一作者', 'Co-first author'],
    description: ['利用共享与逐帧 Prompt Token，以较低训练成本改善视频编辑的一致性。', 'Shared and frame-specific prompt tokens improve consistency in video editing with a small training budget.'],
    paper: 'https://openreview.net/forum?id=4bPH07bP4A'
  }
];


let language = 'zh';
const translations = [...document.querySelectorAll('[data-en]')].map(element => ({element, zh:element.innerHTML, en:element.dataset.en}));
const labels = {zh:{paper:'论文',code:'代码',project:'项目页',copied:'已复制',failed:'请选中上方文字手动复制。',copy:'复制'},en:{paper:'Paper',code:'Code',project:'Project',copied:'Copied',failed:'Select the text above to copy it manually.',copy:'Copy'}};
function element(tag, className, text) {
  const node = document.createElement(tag);
  if(className) node.className=className;
  if(text!==undefined) node.textContent=text;
  return node;
}
function externalLink(text,url){const a=element('a','',text);a.href=url;a.target='_blank';a.rel='noopener';return a;}
function renderPapers(){
  const selected=document.getElementById('selected-papers'),other=document.getElementById('other-papers');
  selected.replaceChildren();other.replaceChildren();
  const index=language==='zh'?0:1;
  papers.forEach(paper=>{
    const article=element('article','paper');article.id='paper-'+paper.id;
    const title=element('h3');title.append(externalLink(paper.title,paper.paper));
    const authors=element('p','authors');
    paper.authors.forEach((name,i)=>{if(i)authors.append(document.createTextNode(', '));authors.append(name==='Sida Li'?element('strong','',name):document.createTextNode(name));});
    const venue=element('div','venue-line');venue.append(element('span','venue',paper.venue),element('span','role',paper.role[index]));
    const links=element('div','paper-links');
    ['paper','code','project'].forEach(key=>{if(paper[key])links.append(externalLink(labels[language][key],paper[key]));});
    if(paper.bib){const button=element('button','','BibTeX');button.type='button';button.setAttribute('aria-label','BibTeX: '+paper.short);button.addEventListener('click',()=>{document.getElementById('citation-text').textContent=paper.bib;document.getElementById('copy-status').textContent='';document.getElementById('copy-citation').textContent=labels[language].copy;document.getElementById('citation-dialog').showModal();});links.append(button);}
    article.append(title,authors,venue,links);
    if(paper.selected)article.append(element('p','paper-description',paper.description[index]));
    (paper.selected?selected:other).append(article);
  });
}
function setLanguage(next){
  language=next;
  translations.forEach(({element,zh,en})=>{if(next==='zh')element.innerHTML=zh;else element.textContent=en;});
  document.documentElement.lang=next==='zh'?'zh-CN':'en';
  document.title=next==='zh'?'李思达 / Sida Li':'Sida Li / Peking University';
  const toggle=document.getElementById('language');toggle.textContent=next==='zh'?'English':'中文';toggle.setAttribute('aria-label',next==='zh'?'Switch to English':'切换至中文');
  renderPapers();
  try{localStorage.setItem('sida-language',next);}catch(_){}
}
document.getElementById('language').addEventListener('click',()=>setLanguage(language==='zh'?'en':'zh'));
let stored=null;try{stored=localStorage.getItem('sida-language');}catch(_){}
setLanguage(stored==='en'?'en':'zh');
const dialog=document.getElementById('citation-dialog');
document.getElementById('close-citation').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.getElementById('copy-citation').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(document.getElementById('citation-text').textContent);document.getElementById('copy-status').textContent=labels[language].copied;}catch(_){const range=document.createRange();range.selectNodeContents(document.getElementById('citation-text'));window.getSelection().removeAllRanges();window.getSelection().addRange(range);document.getElementById('copy-status').textContent=labels[language].failed;}});
let detailsWereOpen=false;
window.addEventListener('beforeprint',()=>{const more=document.getElementById('more-papers');detailsWereOpen=more.open;more.open=true;});
window.addEventListener('afterprint',()=>{document.getElementById('more-papers').open=detailsWereOpen;});
