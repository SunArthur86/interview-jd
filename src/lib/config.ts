import type { Algorithm } from './types';

export interface CategoryConfig {
  label: string;
  icon: string;
  color: string;
}

export const APP_CONFIG = {
  appName: 'JD 面试题库',
  appNameShort: 'JD面试题',
  appIcon: '📝',
  appVersion: '1.0',
  storagePrefix: 'jd-interview',
  githubUrl: 'https://sunarthur86.github.io/jd-interview/',
  repoUrl: 'https://github.com/SunArthur86/jd-interview',
  themeColor: '#0071e3',
  categories: {
    'all':       { label: '全部',           icon: '📚', color: '#0071e3' },
    'ant-risk':  { label: '蚂蚁风控 Java',  icon: '🐜', color: '#ff3b30' },
  } as Record<string, CategoryConfig>,
  subcatGroups: {
    // 蚂蚁风控 Java JD 内部小分组（一份 JD 内的能力维度）
    'JD 核心技术':    ['Java 并发', 'JVM', 'Java 集合', 'Spring Cloud', 'Spring Boot', 'MySQL', 'HBase', '分库分表', '风控系统', '规则引擎', '特征工程', '实时计算', '数据隔离', '系统解耦'],
    '架构设计':       ['风控架构设计', '特征平台设计', '决策引擎设计', '关系网络设计', '设备指纹设计'],
    '高并发高可用':   ['池化', '缓存', '扩容', '异步', '队列', '限流', '降级', '负载均衡', '隔离', '压测', '预案', '回滚'],
    'AI Agent/Infra': ['Agent 改造', 'Agent 架构', 'Agent 工程化', 'LLM 推理', '模型服务', 'RAG 工程', '可观测性', '智能风控', 'LLM 风控', 'GraphRAG', 'FDE 解决方案'],
  } as Record<string, string[]>,
  aboutText: 'JD 面试题库 v1.0\n针对一线大厂 JD（岗位描述）深度拆解，每份 JD 对应一道大题（含 40 道子题）。\n首个 JD：蚂蚁集团国际风控平台 Java 研发工程师（35-50K·16薪）\n覆盖 JD核心技术 · 架构设计 · 高并发高可用 · AI Agent/Infra\n费曼快记 + 第一性原理 + 层层递进深度问答',
} as const;

export const SUBCAT_REVERSE: Record<string, string> = {};
Object.entries(APP_CONFIG.subcatGroups).forEach(([g, subs]) => {
  subs.forEach((s) => {
    SUBCAT_REVERSE[s] = g;
  });
});

export function getSubcatGroup(sub: string | undefined): string {
  return (sub && SUBCAT_REVERSE[sub]) || '其他';
}

export const ALGO_LABELS: Record<Algorithm, string> = {
  sm2: 'SM-2 智能间隔',
  leitner: 'Leitner 卡盒',
  ebbinghaus: '艾宾浩斯曲线',
};
