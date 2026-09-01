export interface PersonaPainDimension {
  id: string;
  title: string;
  iconName: string;
  subtitle: string;
  items: {
    title: string;
    description: string;
    quote: string;
  }[];
}

export interface FailedAttempt {
  whatSheDid: string;
  investment: string;
  whyItFailed: string;
  hiddenMechanism: string;
}

export interface CreativeAngle {
  id: number;
  title: string;
  tag: string;
  description: string;
  exampleAd: string;
  conversionImpact: string;
}

export interface FunnelStep {
  step: number;
  name: string;
  psychologicalTrigger: string;
  copyFunction: string;
  executionExample: string;
}

export const DOSSIER_DATA = {
  overview: {
    title: "Dossiê Estratégico & Análise de Copy",
    expert: "Dra. Talita Melo",
    niche: "Fertilidade Integrativa / Tentantes 35+",
    coreOffer: "Detox da Tentante (7 Dias)",
    price: "R$ 57,00 (Tripwire Front-End)",
    totalAdsAnalyzed: 20,
    mainAudience: "Mulheres de 35 a 46 anos tentando engravidar há mais de 2 anos com histórico de perdas ou exames normais sem gestação."
  },
  persona: {
    name: "Camila / Patrícia (A Tentante Cansada de Tentar)",
    demographics: {
      age: "35 a 44 anos (Pico de sofrimento entre 37 e 41 anos)",
      status: "Casada / União Estável (casamento sob desgaste da rotina clínica)",
      timeTrying: "2 a 7 anos de tentativas frustradas",
      class: "Classe B e C+ (instruída, priorizou estabilidade profissional antes dos 30)",
      frustrationLevel: "Máximo (à beira de desistir ou ceder a tratamentos de FIV caros)"
    },
    internalMonologue: [
      "Será que o problema sou eu?",
      "Todo mês quando a menstruação desce, parece que um pedaço de mim morre no banheiro.",
      "Eu não quero óvulos de outra mulher, eu quero o meu bebê com os meus traços.",
      "Já cortei glúten, já tomei 15 suplementos, fiz de tudo e continuo sem o positivo.",
      "Tenho pavor de pensar que o meu marido pode se ressentir de não ser pai comigo."
    ],
    dictionary: [
      { term: "DPO", meaning: "Dias Pós-Ovulação (a fase de espera angustiante de 14 dias até o atraso menstrual)" },
      { term: "A Monstra", meaning: "Como as tentantes chamam a menstruação que chega destruindo as esperanças do mês" },
      { term: "Beta Positivo", meaning: "O resultado sanguíneo de Beta-hCG confirmando a gestação" },
      { term: "Muco Clara de Ovo", meaning: "O muco cervical elástico e fértil essencial para os espermatozoides sobreviverem" },
      { term: "Bebê Arco-Íris", meaning: "O bebê que nasce após o luto de uma ou mais perdas gestacionais" },
      { term: "Picadinhas do Amor", meaning: "Injeções diárias de heparina/anticoagulante na barriga para quem tem trombofilia" },
      { term: "TSH Subclínico", meaning: "Hipotireoidismo disfarçado: TSH 'normal' para o laboratório (0.5 a 5.0), mas tóxico para fertilidade (> 2.5)" }
    ],
    pains: [
      {
        id: "physical",
        title: "Dores Físicas & Sintomáticas",
        iconName: "Activity",
        subtitle: "O corpo enviando sinais claros de sobrecarga biológica",
        items: [
          {
            title: "Sono Tóxico & Cansaço Crônico",
            description: "Acorda de madrugada com taquicardia ou acorda exausta. A falta de sono reparador bloqueia a produção noturna de LH, FSH e melatonina mitocondrial.",
            quote: "Essas olheiras que não cobrem nem com corretivo são reflexo do sono destruído."
          },
          {
            title: "Secura do Muco Fértil & TPM Severa",
            description: "Ciclos encurtando para 24-26 dias, ausência de muco elástico e irritabilidade extrema devido ao desbalanço estrogênio/progesterona.",
            quote: "Não sinto mais meu corpo ovular como antes."
          },
          {
            title: "Sobrecarga de Suplementos & Azia",
            description: "Gastrite e estômago pesado por tomar 10 a 15 comprimidos diários sem prescrição personalizada.",
            quote: "Tomo Coenzima Q10, DHEA, ômega, metilfolato... e continuo sem engravidar."
          },
          {
            title: "Unhas Quebradiças & Queda de Cabelo",
            description: "Reflexo visível de hipotireoidismo subclínico e estresse oxidativo celular acelerado.",
            quote: "Minhas unhas lascam em camadas e meu cabelo cai no banho."
          }
        ]
      },
      {
        id: "emotional",
        title: "Dores Emocionais & Psicológicas",
        iconName: "Heart",
        subtitle: "O sofrimento silencioso que ela esconde do mundo",
        items: [
          {
            title: "O Luto Mensal no Banheiro",
            description: "A chegada da menstruação é vivida como uma perda real. Ela chora escondida no banheiro para não demonstrar fraqueza.",
            quote: "Mais um mês jogado no lixo, mais uma decepção."
          },
          {
            title: "O Trauma dos Abortos de Repetição",
            description: "O pânico de ver o positivo e reviver o terror de ouvir 'o coração parou de bater' na ultrassom de 8 semanas.",
            quote: "Eu engravidei 7 vezes, mas não tive 7 bebês nos braços."
          },
          {
            title: "A Culpa da Inveja Involuntária",
            description: "Sentir uma pontada de dor ao ver amigas ou desconhecidas grávidas 'sem planejar', seguida de culpa por ter sentido isso.",
            quote: "Por que para todo mundo parece tão fácil e para mim é esse calvário?"
          },
          {
            title: "A Raiva do 'Relaxa que Engravida'",
            description: "A humilhação de ouvir conselhos vazios de pessoas que não entendem a complexidade biológica do problema.",
            quote: "Se relaxar engravidasse, ninguém precisava de médico."
          }
        ]
      },
      {
        id: "relationship",
        title: "Dores no Relacionamento Conjugal",
        iconName: "Users",
        subtitle: "O esfriamento da intimidade e a rotina de clínica",
        items: [
          {
            title: "Sexo Mecânico por Tabela",
            description: "A intimidade espontânea deu lugar a relações com dia e hora marcada pela fita de ovulação, gerando broxadas e frustração.",
            quote: "Hoje é o pico do LH, você precisa fazer agora."
          },
          {
            title: "A Sobrecarga Solitária",
            description: "Sentir que estuda, faz dieta e se priva de tudo sozinha, enquanto o parceiro acha que 'está tudo bem' porque o espermograma deu normal.",
            quote: "Parece que só eu sinto a dor dessa ausência."
          },
          {
            title: "Medo do Ressentimento Futuro",
            description: "O medo secreto de que a falta de um filho gere um vazio permanente que termine em separação com o passar dos anos.",
            quote: "E se ele me culpar no futuro por não ter sido pai?"
          }
        ]
      },
      {
        id: "social",
        title: "Dores Sociais & Familiares",
        iconName: "ShieldAlert",
        subtitle: "O isolamento social para evitar perguntas invasivas",
        items: [
          {
            title: "Fuga de Chás de Bebê e Festas Infantis",
            description: "Inventar desculpas para não comparecer a eventos familiares onde haverá grávidas e crianças.",
            quote: "Não aguento mais ter que sorrir e fingir que está tudo bem."
          },
          {
            title: "Aniversários como Contagem Regressiva",
            description: "Fazer 36, 38 ou 40 anos é sentido como uma sentença de morte biológica em vez de uma celebração de vida.",
            quote: "Mais um ano que passou e o quarto continua vazio."
          }
        ]
      }
    ],
    failedAttempts: [
      {
        whatSheDid: "Detox Radical & Cortar Tudo",
        investment: "Meses de restrição alimentar severa (sem glúten, lactose, açúcar, cafeína)",
        whyItFailed: "Restrição extrema sem suporte emocional gera estresse metabólico, aumentando o cortisol e bloqueando a progesterona.",
        hiddenMechanism: "O estresse da dieta anula o benefício anti-inflamatório do alimento."
      },
      {
        whatSheDid: "Pilha de 15 Suplementos",
        investment: "R$ 800 a R$ 1.500/mês em CoQ10, Ômega 3, DHEA, Inositol, Metilfolato",
        whyItFailed: "Intestino inflamado sob estresse não absorve nutrientes, e os receptores celulares continuam bloqueados por toxinas.",
        hiddenMechanism: "Suplemento sem desinflamação do terreno vira urina cara."
      },
      {
        whatSheDid: "Injeções de Heparina ('Picadinhas')",
        investment: "Injeções diárias dolorosas com hematomas na barriga",
        whyItFailed: "Anticoagulante impede microtrombos, mas não apaga o fogo da inflamação de miomas, adenomiose e oxidação celular.",
        hiddenMechanism: "O embrião implanta, mas o tecido inflamado não permite a vascularização evolutiva."
      },
      {
        whatSheDid: "Testes de Ovulação Diários & Termômetro",
        investment: "Fitas de LH 3x ao dia e despertar às 6h para medir temperatura basal",
        whyItFailed: "Mantém o cérebro em estado crônico de 'luta ou fuga', inibindo o GnRH e tornando o muco hostil.",
        hiddenMechanism: "A obsessão pelo controle ativa o sistema nervoso simpático, que desliga a reprodução."
      }
    ]
  },
  mechanisms: {
    coreProblem: "Oxidação Celular, Hipotireoidismo Subclínico e Inflamação Sistêmica Oculta que destroem a qualidade ovariana e impedem a fixação embrionária após os 35 anos.",
    coreSolution: "O Detox da Tentante (7 Dias): Protocolo de desintoxicação biológica rápida + Auditoria médica das 4 Fases da Fertilidade + Relatório Individual com o nome da aluna.",
    labComparison: {
      marker: "TSH (Hormônio Estimulador da Tireoide)",
      labNormalRange: "0.5 a 5.0 mUI/L (Considerado 'normal' pelo convênio)",
      fertilityIdealRange: "Menor que 2.5 mUI/L (Obrigatório para engravidar e não abortar)",
      explanation: "Um TSH de 3.8 dá laudo de 'normalidade' no papel, mas para uma mulher com mais de 35 anos gera falhas repetidas de implantação e abortos no primeiro trimestre."
    },
    fourPhases: [
      { phase: "Fase 1: Ovulação", focus: "Qualidade mitocondrial do óvulo e redução da oxidação celular." },
      { phase: "Fase 2: Concepção", focus: "Muco fértil adequado e encontro dos gametas sem hostilidade ácida." },
      { phase: "Fase 3: Implantação", focus: "Endométrio receptivo, desinflamado e livre de microtrombos." },
      { phase: "Fase 4: Desenvolvimento", focus: "Sustentação hormonal (progesterona) e nutrição vascular do feto." }
    ],
    creativeAngles: [
      {
        id: 1,
        title: "Metáfora Visual do Óvulo",
        tag: "Gancho de Alto CTR",
        description: "Usa objetos táteis e visuais (Laranja Murcha, Unha Lascada, Manchas Roxas) para ancorar conceitos médicos complexos em 3 segundos.",
        exampleAd: "Ad 01 (Laranja Murcha) & Ad 10 (Unha Lascada)",
        conversionImpact: "Interrompe o feed e gera retenção imediata nos primeiros 5 segundos."
      },
      {
        id: 2,
        title: "Micro-Targeting por Idade Exata",
        tag: "Hipersegmentação",
        description: "Anúncios dedicados para 35, 36, 37, 38, 39, 40, 41, 42 e 46 anos, ativando a dor do relógio biológico.",
        exampleAd: "Ad 12 (38 anos), Ad 16 (39 anos), Ad 17 (35 anos), Ad 19 (36 anos)",
        conversionImpact: "Baixa o CPM no Meta Ads porque a pessoa ouve sua idade no 1º segundo."
      },
      {
        id: 3,
        title: "A Jornada da Heroína / Vulnerabilidade",
        tag: "Quebra de Ceticismo",
        description: "A médica revela que teve 5 perdas, 10 anos de tentativas e que ouviu colegas mandarem desistir, mas venceu aos 42 e 43 anos.",
        exampleAd: "Ad 04 (7 Betas) & Ad 05 (Trombofilia)",
        conversionImpact: "Destrói a barreira entre médico frio e paciente desamparada."
      },
      {
        id: 4,
        title: "O Inimigo Comum (Medicina Banalizadora)",
        tag: "Retirada de Culpa",
        description: "Aponta o dedo para consultas de 15 minutos e laboratórios que mandam a tentante 'relaxar' enquanto ignoram o TSH subclínico.",
        exampleAd: "Ad 01, Ad 07 e Ad 10",
        conversionImpact: "Tira a culpa da mulher e a coloca como vítima de um sistema despreparado."
      },
      {
        id: 5,
        title: "Remarketing Relâmpago de Urgência",
        tag: "Recuperação de Vendas",
        description: "Anúncios curtos de 20 segundos para carrinho abandonado com gatilho de desconto e visualização única.",
        exampleAd: "Ad 03 e Ad 15",
        conversionImpact: "Garante taxa de conversão final alta recuperando até 20-30% dos leads perdidos."
      }
    ]
  },
  invisibleStructure: [
    {
      step: 1,
      name: "O Gancho de Quebra de Padrão (Pattern Interrupt)",
      psychologicalTrigger: "Curiosidade Mórbida & Identificação Imediata",
      copyFunction: "Mostra um sintoma visual (unha lascada, hematoma, olheira) + Idade exata para reter 70%+ nos primeiros 3 segundos.",
      executionExample: "'Seu ovário está igual a uma laranja murcha' ou 'Está vendo essa unha lascada?'"
    },
    {
      step: 2,
      name: "Validação do Trauma & Empatia Radical",
      psychologicalTrigger: "Rapport por Sofrimento Compartilhado",
      copyFunction: "Demonstra que a especialista já esteve no mesmo buraco emocional (5 perdas gestacionais, 10 anos de dor).",
      executionExample: "'Eu também ouvi dos médicos que estava velha e para desistir... chorei o mesmo que você.'"
    },
    {
      step: 3,
      name: "Criação do Inimigo Comum & Alívio de Culpa",
      psychologicalTrigger: "Redenção Psicológica",
      copyFunction: "Explica que a culpa não é da mulher, mas de exames mal interpretados e tratamentos genéricos.",
      executionExample: "'Na medicina tradicional, a fertilidade é banalizada com frases como relaxa que engravida.'"
    },
    {
      step: 4,
      name: "Revelação do Mecanismo Oculto Único",
      psychologicalTrigger: "Iluminação / Efeito 'A-ha!'",
      copyFunction: "Apresenta a causa raiz científica e tangível (oxidação ovariana, TSH subclínico < 2.5, as 4 fases).",
      executionExample: "'O TSH no papel de 0.5 a 5.0 é normal para exame comum, mas para fertilidade precisa ser menor que 2.5.'"
    },
    {
      step: 5,
      name: "Oferta Tripwire de Baixíssima Fricção (R$ 57)",
      psychologicalTrigger: "No-Brainer Offer (Irrecusável)",
      copyFunction: "Vende 7 dias de acompanhamento diário com médica + cardápio + relatório personalizado com o nome da aluna.",
      executionExample: "'O Detox custa apenas R$ 57, com lista de mercado e análise dos seus exames.'"
    },
    {
      step: 6,
      name: "O Loop de Retenção para o Back-End (Mentoria)",
      psychologicalTrigger: "Continuidade de Tratamento",
      copyFunction: "A entrega do Relatório Individual no 7º dia aponta o diagnóstico exato e abre a porta para a Mentoria Avançada (High-Ticket).",
      executionExample: "'No domingo você recebe seu relatório individual para dar o próximo passo definitivo.'"
    }
  ],
  audit: {
    strengths: [
      {
        title: "Autoridade Híbrida Poderosa (Médica + Ex-Tentante 40+)",
        description: "Combina a credibilidade do jaleco branco de Ginecologista com a vulnerabilidade de quem sofreu 5 abortos e venceu aos 43 anos."
      },
      {
        title: "Uso Magistral de Props Visuais nos Hooks",
        description: "Usar laranjas, hematomas reais e unhas quebradas no primeiro frame destrói a cegueira de anúncios do feed."
      },
      {
        title: "Hipersegmentação Etária no Tráfego Pago",
        description: "Permite criar conjuntos de anúncios por idade exata (35, 36, 37, 38, 39, 40+), gerando relevância e CTRs acima de 3-4%."
      },
      {
        title: "Entregável de Ouro (Relatório com Nome por R$ 57)",
        description: "A promessa de uma médica ginecologista assinar um relatório nominal de diagnóstico gera valor percebido de mais de R$ 500 por apenas R$ 57."
      }
    ],
    weaknesses: [
      {
        title: "Alto Risco de Reprovação no Meta Ads (Compliance)",
        description: "Ganchos como 'Se você tem olheiras...', 'Você está velha demais' e menções a abortos violam as diretrizes de Atributos Pessoais e Saúde do Facebook.",
        riskLevel: "Alto (Risco de bloqueio de conta de anúncios)"
      },
      {
        title: "Promessa no Limite Biológico (46 Anos)",
        description: "Vender gravidez natural para mulheres de 46 anos (Ad 13) cria expectativas irreais (taxa biológica natural < 1%), gerando frustração e chargebacks.",
        riskLevel: "Médio-Alto"
      },
      {
        title: "O Ponto Cego da Solução: Foco Exclusivo em Comida",
        description: "A Dra. Talita foca 100% em desinflamar com cardápio alimentar, ignorando o impacto destrutivo do cortisol e do estresse crônico nos óvulos.",
        riskLevel: "Oportunidade de Ataque Competitivo"
      }
    ],
    competitiveAttackBlueprint: {
      headline: "Como Superar a Dra. Talita Melo no Seu Novo Produto (R$ 49,90)",
      coreAngle: "Desinflamar e comer bem não é o suficiente: É preciso alinhar a saúde física com o Eixo Neuro-Hormonal (Mente + Corpo).",
      advantages: [
        {
          point: "Ataque ao Ponto Cego da Concorrência",
          explanation: "Enquanto a Dra. Talita promete que 'mudar a comida em 7 dias' resolve, você mostra que uma mulher estressada com cortisol alto sabota a progesterona mesmo comendo salada e tomando vitaminas."
        },
        {
          point: "Preço Mais Acessível (R$ 49,90 vs R$ 57,00)",
          explanation: "Rompe a barreira psicológica dos R$ 50,00 com entrega ao vivo em 5 dias."
        },
        {
          point: "Acolhimento Sem Dieta Punitiva",
          explanation: "O público está exausto de regras alimentares estritas. Sua abordagem integrativa traz alívio emocional imediato."
        }
      ]
    }
  }
};
