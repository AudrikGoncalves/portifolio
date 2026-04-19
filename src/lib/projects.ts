export interface ProjectSpec {
  label: string;
  value: string;
}

export interface TechnicalImage {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  location: string;
  area: string;
  year: string;
  heroImage: string;
  listingImage: string;
  specs: ProjectSpec[];
  technicalTitle: string;
  technicalDescription: string;
  technicalImages: TechnicalImage[];
}

export const projects: Project[] = [
  {
    slug: "residencial-guanhaes",
    num: "01",
    category: "Edifício Residencial",
    title: "Edifício Residencial",
    subtitle: "Guanhães, MG",
    shortDescription:
      "Edifício multifamiliar com oito pavimentos e 32 unidades habitacionais. O projeto foi desenvolvido com modelagem BIM completa, permitindo a compatibilização integral das disciplinas de arquitetura, estrutura e instalações. O sistema de lajes nervuradas adotado resultou em redução de 18% no consumo de concreto em relação à solução convencional, com melhoria simultânea do desempenho acústico entre pavimentos.",
    location: "Guanhães, Minas Gerais",
    area: "3.200 m²",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85",
    listingImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    specs: [
      { label: "Área Total Construída", value: "3.200 m²" },
      { label: "Número de Pavimentos", value: "8 pavimentos" },
      { label: "Número de Unidades", value: "32 apartamentos" },
      { label: "Taxa de Ocupação", value: "60%" },
      { label: "Coeficiente de Aproveitamento", value: "4,8" },
      { label: "Sistema Estrutural", value: "Concreto armado moldado in loco" },
      { label: "Sistema de Lajes", value: "Lajes nervuradas bidirecional" },
      { label: "Cobertura", value: "Laje impermeabilizada com jardim extensivo" },
      { label: "Normas Aplicadas", value: "ABNT NBR 6118, NBR 15575" },
      { label: "Software Utilizado", value: "Revit, AutoCAD, TQS" },
    ],
    technicalTitle: "Desenvolvimento Técnico",
    technicalDescription:
      "A modelagem BIM em Revit possibilitou a detecção precoce de interferências entre estrutura e instalações, eliminando incompatibilidades em fase de projeto. O dimensionamento estrutural seguiu rigorosamente a NBR 6118, com verificações de ELU e ELS. A análise de desempenho térmico conforme NBR 15575 orientou a escolha dos fechamentos opacos e das esquadrias.",
    technicalImages: [
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
        caption: "Documentação técnica — Pranchas de estrutura e cortes",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
        caption: "Fase de execução — Concretagem das lajes nervuradas",
      },
    ],
  },
  {
    slug: "residencia-guanhaes",
    num: "02",
    category: "Residência Unifamiliar",
    title: "Residência Unifamiliar",
    subtitle: "Guanhães, MG",
    shortDescription:
      "Residência unifamiliar de 420 m² com partido bioclimático desenvolvido especificamente para o contexto climático de Minas Gerais. Soluções passivas de climatização — brises verticais na fachada norte, ventilação cruzada controlada e cobertura verde — reduzem em 40% o consumo energético em relação à solução convencional. O uso de materiais regionais reforça a identidade local e diminui o custo de transporte.",
    location: "Guanhães, Minas Gerais",
    area: "420 m²",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=85",
    listingImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    specs: [
      { label: "Área Construída", value: "420 m²" },
      { label: "Área do Terreno", value: "1.200 m²" },
      { label: "Número de Suítes", value: "4 suítes" },
      { label: "Taxa de Ocupação", value: "35%" },
      { label: "Sistema Estrutural", value: "Alvenaria estrutural + laje pré-moldada" },
      { label: "Vedação", value: "Bloco de concreto celular autoclavado" },
      { label: "Cobertura", value: "Telhado verde extensivo + telha cerâmica" },
      { label: "Proteção Solar", value: "Brises verticais em madeira tratada" },
      { label: "Normas Aplicadas", value: "ABNT NBR 15220, NBR 15575" },
      { label: "Software Utilizado", value: "Revit, SketchUp, Lumion" },
    ],
    technicalTitle: "Desenvolvimento Técnico",
    technicalDescription:
      "Simulações de insolação e ventilação natural foram realizadas para validar as decisões de implantação e orientação solar. A análise higrotérmica conforme NBR 15220 definiu os índices de absortância das superfícies externas. O detalhamento estrutural da alvenaria seguiu a NBR 10837, com verificação de cargas verticais e horizontais.",
    technicalImages: [
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
        caption: "Análise de implantação — Estudo de insolação e ventilação",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
        caption: "Pranchas técnicas — Detalhamento de fachada e cobertura",
      },
    ],
  },
  {
    slug: "edificio-misto",
    num: "03",
    category: "Edifício Vertical de Uso Misto",
    title: "Edifício Vertical de Uso Misto",
    subtitle: "Projeto Acadêmico",
    shortDescription:
      "Torre de 15 pavimentos integrando comércio nos primeiros três andares e habitação nos andares superiores. A análise paramétrica urbana orientou os recuos, gabaritos e índices de aproveitamento, garantindo conformidade com o Plano Diretor. A solução estrutural em pórtico de concreto armado permite flexibilidade nos layouts internos para adaptação às diferentes funções do programa.",
    location: "Projeto Acadêmico — PUC Minas",
    area: "9.600 m²",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85",
    listingImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    specs: [
      { label: "Área Total Construída", value: "9.600 m²" },
      { label: "Número de Pavimentos", value: "15 pavimentos" },
      { label: "Área Comercial", value: "1.920 m² (3 pav.)" },
      { label: "Área Residencial", value: "7.680 m² (12 pav.)" },
      { label: "Número de Unidades Hab.", value: "48 apartamentos" },
      { label: "Taxa de Ocupação", value: "70%" },
      { label: "Coeficiente de Aproveitamento", value: "9,6" },
      { label: "Sistema Estrutural", value: "Pórtico de concreto armado" },
      { label: "Normas Aplicadas", value: "ABNT NBR 6118, Plano Diretor Municipal" },
      { label: "Software Utilizado", value: "Revit, Grasshopper, AutoCAD" },
    ],
    technicalTitle: "Desenvolvimento Técnico",
    technicalDescription:
      "A análise paramétrica foi conduzida em Grasshopper para avaliar diferentes configurações de implantação em relação ao entorno urbano. O modelo BIM em Revit integrou as disciplinas de arquitetura e estrutura, com exportação de quantitativos para orçamentação. O dimensionamento dos pilares considerou as combinações de cargas normais de uso misto conforme NBR 6118.",
    technicalImages: [
      {
        src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
        caption: "Análise de gabarito — Inserção urbana e parâmetros de zoneamento",
      },
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
        caption: "Diagnóstico urbano — Leitura do entorno e fluxos viários",
      },
    ],
  },
  {
    slug: "habitacao-estudantil",
    num: "04",
    category: "Habitação Coletiva Estudantil",
    title: "Habitação Coletiva Estudantil",
    subtitle: "Projeto Acadêmico",
    shortDescription:
      "Conjunto habitacional para 120 estudantes composto por unidades modulares de 24 m² e extensos espaços coletivos de convivência, estudo e lazer. O partido sustentável incorpora captação e reuso de águas pluviais, painéis fotovoltaicos e hortas comunitárias. A modularidade estrutural facilita futuras ampliações sem interrupção do uso.",
    location: "Projeto Acadêmico — PUC Minas",
    area: "5.400 m²",
    year: "2022",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85",
    listingImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    specs: [
      { label: "Área Total Construída", value: "5.400 m²" },
      { label: "Capacidade", value: "120 estudantes" },
      { label: "Número de Unidades", value: "80 módulos" },
      { label: "Área por Unidade", value: "24 m² a 48 m²" },
      { label: "Área de Uso Coletivo", value: "1.600 m²" },
      { label: "Sistema Estrutural", value: "Estrutura metálica modular" },
      { label: "Energia", value: "Painéis fotovoltaicos — 60 kWp" },
      { label: "Gestão Hídrica", value: "Captação de água pluvial — 30.000 L" },
      { label: "Normas Aplicadas", value: "ABNT NBR 15965, NBR 9050" },
      { label: "Software Utilizado", value: "Revit, Grasshopper, Energy Plus" },
    ],
    technicalTitle: "Desenvolvimento Técnico",
    technicalDescription:
      "A modularidade estrutural em aço permite a montagem de unidades em tempo reduzido e com menor geração de resíduos no canteiro. A simulação energética em EnergyPlus validou o desempenho térmico do envelope. O sistema de gestão hídrica foi dimensionado para cobrir 80% da demanda de água não potável do conjunto.",
    technicalImages: [
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
        caption: "Sistema modular — Montagem da estrutura metálica em aço",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
        caption: "Documentação BIM — Detalhamento das unidades modulares",
      },
    ],
  },
  {
    slug: "centro-comercial-sabinopolis",
    num: "05",
    category: "Centro Comercial",
    title: "Centro Comercial",
    subtitle: "Sabinópolis, MG",
    shortDescription:
      "Centro comercial de 8.500 m² com soluções estruturais mistas em aço e concreto. O layout foi desenvolvido com base em análise de fluxo de clientes e logística de abastecimento, maximizando a eficiência operacional. A cobertura metálica em treliças espaciais permite vãos livres de até 24 metros, criando pavimentos sem pilares intermediários.",
    location: "Sabinópolis, Minas Gerais",
    area: "8.500 m²",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85",
    listingImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    specs: [
      { label: "Área Total Construída", value: "8.500 m²" },
      { label: "Área de Vendas", value: "5.200 m²" },
      { label: "Número de Lojas", value: "42 unidades" },
      { label: "Vagas de Estacionamento", value: "320 vagas" },
      { label: "Vão Livre Máximo", value: "24 metros" },
      { label: "Sistema Estrutural", value: "Estrutura mista aço-concreto" },
      { label: "Cobertura", value: "Treliças espaciais em aço galvanizado" },
      { label: "Fachada", value: "Vidro duplo com controle solar" },
      { label: "Normas Aplicadas", value: "ABNT NBR 7190, NBR 6118, NBR 14432" },
      { label: "Software Utilizado", value: "Revit, SAP2000, AutoCAD" },
    ],
    technicalTitle: "Desenvolvimento Técnico",
    technicalDescription:
      "O dimensionamento das treliças espaciais foi realizado em SAP2000 com análise linear e não-linear geométrica. A verificação à fadiga dos elementos de aço seguiu a NBR 7190. O projeto de prevenção e combate a incêndio foi elaborado conforme NBR 14432, com saídas de emergência dimensionadas para evacuação em até 2,5 minutos.",
    technicalImages: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
        caption: "Implantação — Vista geral do conjunto comercial",
      },
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
        caption: "Análise urbana — Acessos viários e estacionamento",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
