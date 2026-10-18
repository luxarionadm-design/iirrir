import React, { useState, useMemo } from 'react';
import { 
  Folder, 
  FileCode, 
  ChevronRight, 
  Code2, 
  Calculator, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  Bookmark, 
  Flame, 
  GitBranch, 
  Copy, 
  Check, 
  Search,
  Sparkles
} from 'lucide-react';

import {
  SocialMathUtils,
  EngagementVector2,
  EngagementVector3,
  EngagementVector4,
  SocialTransitionMatrix2,
  SocialAffinityMatrix3,
  GraphDiffusionMatrix4,
  AudienceSegmentBox2,
  FilterBubbleBox3,
  ViralCascadeSphere,
  FeedAttentionFrustum,
  MultiFeedFrustumArray,
  InformationBroadcastRay,
  GrowthTrajectoryLine3,
  AlgorithmicCutoffPlane,
  SocialTriad,
  SentimentEuler,
  InfluenceQuaternion,
  CommunitySpherical,
  FeedFlowCylindrical,
  EchoHarmonics3,
  SentimentColor,
  SentimentColorManagement,
  AttentionInterpolant,
  LinearDecayInterpolant,
  ViralBurstInterpolant,
  AudienceRetentionInterpolant,
  BatchPostingInterpolant,
  InfluenceLinearInterpolant
} from './math/index.js';

interface FileItem {
  id: string;
  name: string;
  threeJsEquivalent: string;
  category: 'aljabar' | 'bounding' | 'koordinat' | 'filter' | 'spektrum' | 'interpolant' | 'utilitas';
  folder: 'src/math' | 'src/math/interpolants';
  description: string;
  formula: string;
}

const ALL_29_FILES: FileItem[] = [
  // 1-3: Vektor
  { id: '1', name: 'EngagementVector2.js', threeJsEquivalent: 'Vector2.js', category: 'aljabar', folder: 'src/math', description: 'Vektor metrik 2D: [Reach, Engagement]. Rasio keterlibatan audiens dasar.', formula: 'ERR = (Engagement / Reach) * 100' },
  { id: '2', name: 'EngagementVector3.js', threeJsEquivalent: 'Vector3.js', category: 'aljabar', folder: 'src/math', description: 'Vektor metrik 3D: [Reach, Engagement, Sentiment]. Resonansi dot product dan keselarasan ideologi.', formula: 'dot(v) = x*vx + y*vy + z*vz' },
  { id: '3', name: 'EngagementVector4.js', threeJsEquivalent: 'Vector4.js', category: 'aljabar', folder: 'src/math', description: 'Vektor metrik 4D kampanye: [Reach, Engagement, Sentiment, Conversion].', formula: 'ConversionRate = (w / x) * 100' },

  // 4-6: Matriks
  { id: '4', name: 'SocialTransitionMatrix2.js', threeJsEquivalent: 'Matrix2.js', category: 'aljabar', folder: 'src/math', description: 'Matriks transisi Markov 2x2 untuk probabilitas konversi audiens (Viewer <-> Follower / Churn).', formula: 'M = [[P(V->V), P(V->F)], [P(F->C), P(F->R)]]' },
  { id: '5', name: 'SocialAffinityMatrix3.js', threeJsEquivalent: 'Matrix3.js', category: 'aljabar', folder: 'src/math', description: 'Matriks afinitas 3x3 relasi jaringan 3 pilar: Kreator, Komunitas, dan Brand.', formula: 'M_ij = interaction_weight(i, j)' },
  { id: '6', name: 'GraphDiffusionMatrix4.js', threeJsEquivalent: 'Matrix4.js', category: 'aljabar', folder: 'src/math', description: 'Matriks difusi 4 saluran jaringan (Organik, Viral, Algoritmik, Berbayar) & PageRank solver.', formula: 'Rank_{t+1} = (1-d)/N + d * M^T * Rank_t' },

  // 7-10: Bounding & Sphere
  { id: '7', name: 'AudienceSegmentBox2.js', threeJsEquivalent: 'Box2.js', category: 'bounding', folder: 'src/math', description: 'Bounding box 2D: Interval target min/max untuk jangkauan dan engagement.', formula: 'contains(p) = min.x <= p.x <= max.x && min.y <= p.y <= max.y' },
  { id: '8', name: 'FilterBubbleBox3.js', threeJsEquivalent: 'Box3.js', category: 'bounding', folder: 'src/math', description: 'Bounding box 3D ruang opini: Batas toleransi homofili dan isolasi ideologi.', formula: 'isRadicalized = (max.z < -0.5 || min.z > 0.5)' },
  { id: '9', name: 'ViralCascadeSphere.js', threeJsEquivalent: 'Sphere.js', category: 'bounding', folder: 'src/math', description: 'Bola penularan informasi: Titik pusat penyebar + radius jangkauan viral R0.', formula: 'distanceTo(center) <= radius' },

  // 11-12: Frustum
  { id: '10', name: 'FeedAttentionFrustum.js', threeJsEquivalent: 'Frustum.js', category: 'filter', folder: 'src/math', description: 'Piramida perhatian feed algoritma: culling konten di luar ambang batas relevansi dan toksisitas.', formula: 'isVisible = point.z >= toxicityCutoff && point.y >= minEngagement' },
  { id: '11', name: 'MultiFeedFrustumArray.js', threeJsEquivalent: 'FrustumArray.js', category: 'filter', folder: 'src/math', description: 'Kumpulan frustum culling untuk multi-feed paralel (For You, Following, Trending).', formula: 'filterPosts = posts.filter(p => frustums.some(f => f.contains(p)))' },

  // 13-16: Ray, Line, Plane, Triangle
  { id: '12', name: 'InformationBroadcastRay.js', threeJsEquivalent: 'Ray.js', category: 'bounding', folder: 'src/math', description: 'Sinar broadcast narasi: Asal pesan + arah transmisi + jangkauan penetrasi komunitas.', formula: 'P(t) = origin + t * direction' },
  { id: '13', name: 'GrowthTrajectoryLine3.js', threeJsEquivalent: 'Line3.js', category: 'bounding', folder: 'src/math', description: 'Segmen garis trajektori pertumbuhan akun/kampanye antara waktu t1 dan t2.', formula: 'delta = end - start' },
  { id: '14', name: 'AlgorithmicCutoffPlane.js', threeJsEquivalent: 'Plane.js', category: 'filter', folder: 'src/math', description: 'Hyperplane batas algoritma: Bidang pemisah moderasi konten, shadowban, dan penalty.', formula: 'distance = normal.dot(p) + constant >= 0' },
  { id: '15', name: 'SocialTriad.js', threeJsEquivalent: 'Triangle.js', category: 'bounding', folder: 'src/math', description: 'Teorema keseimbangan Heider antara 3 aktor jaringan sosial (A-B-C Triad).', formula: 'isBalanced = (AB * BC * CA) > 0' },

  // 17-21: Koordinat & Rotasi Sikap
  { id: '16', name: 'SentimentEuler.js', threeJsEquivalent: 'Euler.js', category: 'koordinat', folder: 'src/math', description: 'Sudut orientasi sentimen publik pada 3 sumbu: Valence, Arousal, Dominance.', formula: 'Orientation = [Valence, Arousal, Dominance]' },
  { id: '17', name: 'InfluenceQuaternion.js', threeJsEquivalent: 'Quaternion.js', category: 'koordinat', folder: 'src/math', description: 'Rotasi pergeseran opini 4D hiperkompleks tanpa gimbal lock polarisasi ideologi.', formula: 'q = [w, x, y, z] (Unit hypercomplex)' },
  { id: '18', name: 'CommunitySpherical.js', threeJsEquivalent: 'Spherical.js', category: 'koordinat', folder: 'src/math', description: 'Koordinat bola audiens: Jarak sosial r, sudut polarisasi phi, topik azimuth theta.', formula: '[r, phi, theta]' },
  { id: '19', name: 'FeedFlowCylindrical.js', threeJsEquivalent: 'Cylindrical.js', category: 'koordinat', folder: 'src/math', description: 'Koordinat silinder konsumsi: Jarak atensi r, topik minat theta, kedalaman waktu y.', formula: '[r, theta, y]' },
  { id: '20', name: 'EchoHarmonics3.js', threeJsEquivalent: 'SphericalHarmonics3.js', category: 'koordinat', folder: 'src/math', description: 'Aproksimasi spektral harmonik distribusi opini di seluruh jejaring sosial.', formula: 'Harmonics = sum(c_l^m * Y_l^m)' },

  // 22-23: Spektrum Warna & Manajemen Skala
  { id: '21', name: 'SentimentColor.js', threeJsEquivalent: 'Color.js', category: 'spektrum', folder: 'src/math', description: 'Representasi skala spektrum emosi RGB/HSL (Merah = toksik/negatif, Hijau = positif).', formula: 'color.setFromSentimentValence(v)' },
  { id: '22', name: 'SentimentColorManagement.js', threeJsEquivalent: 'ColorManagement.js', category: 'spektrum', folder: 'src/math', description: 'Normalisasi rentang skala sentimen lintas platform media sosial (X, TikTok, Reddit).', formula: 'normalized = ((raw - min) / (max - min)) * 2 - 1' },

  // 24: Base Interpolant
  { id: '23', name: 'AttentionInterpolant.js', threeJsEquivalent: 'Interpolant.js', category: 'interpolant', folder: 'src/math', description: 'Base class interpolasi temporal dinamika media sosial terhadap waktu t.', formula: 'evaluate(t) -> sample values interpolation' },

  // 25: Utilitas
  { id: '24', name: 'SocialMathUtils.js', threeJsEquivalent: 'MathUtils.js', category: 'utilitas', folder: 'src/math', description: 'Koleksi formula utilitas: Wilson score, EdgeRank, Gini inequality, UUID, clamp, lerp.', formula: 'wilsonScore, edgeRank, giniCoefficient, kFactor' },

  // 25-29: Subdirektori Interpolants (5 file)
  { id: '25', name: 'LinearDecayInterpolant.js', threeJsEquivalent: 'LinearInterpolant.js', category: 'interpolant', folder: 'src/math/interpolants', description: 'Peluruhan linier atensi konten terhadap waktu: A(t) = A0 - k*t.', formula: 'lerp(val[i-1], val[i], alpha)' },
  { id: '26', name: 'ViralBurstInterpolant.js', threeJsEquivalent: 'CubicInterpolant.js', category: 'interpolant', folder: 'src/math/interpolants', description: 'Kurva logistik lonjakan viral (Sigmoid takeoff + peluruhan stabil).', formula: 'Reach(t) = maxReach / (1 + exp(-k*(t - peakHour)))' },
  { id: '27', name: 'AudienceRetentionInterpolant.js', threeJsEquivalent: 'BezierInterpolant.js', category: 'interpolant', folder: 'src/math/interpolants', description: 'Kurva retensi video penonton per detik (watch-through drop-off) dengan cubic smoothing.', formula: 'smoothAlpha = alpha^2 * (3 - 2*alpha)' },
  { id: '28', name: 'BatchPostingInterpolant.js', threeJsEquivalent: 'DiscreteInterpolant.js', category: 'interpolant', folder: 'src/math/interpolants', description: 'Interpolasi nilai diskrit bertahap dari jadwal postingan berkala.', formula: 'step-wise evaluation per posting timestamp' },
  { id: '29', name: 'InfluenceLinearInterpolant.js', threeJsEquivalent: 'QuaternionLinearInterpolant.js', category: 'interpolant', folder: 'src/math/interpolants', description: 'Interpolasi pergeseran opini dan pengaruh sikap publik secara bertahap.', formula: 'lerp of opinion orientation' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'calculator' | 'matrix' | 'docs'>('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<FileItem>(ALL_29_FILES[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  // Live Playground State
  const [reach, setReach] = useState(30000);
  const [engagement, setEngagement] = useState(2400);
  const [sentiment, setSentiment] = useState(0.4);

  const [invites, setInvites] = useState(2.8);
  const [conversion, setConversion] = useState(0.45);

  const [upvotes, setUpvotes] = useState(120);
  const [downvotes, setDownvotes] = useState(10);

  const [edgeAffinity, setEdgeAffinity] = useState(2.0);
  const [edgeWeight, setEdgeWeight] = useState(3.0);
  const [edgeAge, setEdgeAge] = useState(12);

  const [videoDuration, setVideoDuration] = useState(60);
  const [checkSec, setCheckSec] = useState(15);

  // Live Instances
  const vectorInstance = useMemo(() => {
    return new EngagementVector3(reach, engagement, sentiment);
  }, [reach, engagement, sentiment]);

  const kFactorValue = useMemo(() => {
    return SocialMathUtils.kFactor(invites, conversion);
  }, [invites, conversion]);

  const wilsonScore = useMemo(() => {
    return SocialMathUtils.wilsonScore(upvotes, downvotes);
  }, [upvotes, downvotes]);

  const edgeRankScore = useMemo(() => {
    return SocialMathUtils.edgeRank(edgeAffinity, edgeWeight, edgeAge);
  }, [edgeAffinity, edgeWeight, edgeAge]);

  const retentionInstance = useMemo(() => {
    return new AudienceRetentionInterpolant([0, 5, 15, 30, 60], [100, 85, 70, 50, 30]);
  }, []);

  const filteredFiles = useMemo(() => {
    return ALL_29_FILES.filter(f => {
      const matchSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.threeJsEquivalent.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCat = selectedCategory === 'all' || f.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/90 backdrop-blur px-6 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center font-mono font-bold text-sm shadow">
            29
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-100">
              <span>social-math.js</span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                24 + 5 = 29 Files (1:1 Three.js Inheritance)
              </span>
            </div>
            <p className="text-[11px] text-neutral-400">Pustaka Matematika Media Sosial dengan Format, Struktur, dan Jumlah File Persis Three.js</p>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-neutral-950 p-1 rounded-lg border border-neutral-800">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'explorer' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Folder className="w-3.5 h-3.5 text-indigo-400" />
            29 Modul File Explorer
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'calculator' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            Live Mathematical Engine
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'docs' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Tabel Warisan 29 Modul
          </button>
        </nav>
      </header>

      {/* Main Body */}
      <main className="flex-1 flex overflow-hidden">
        {activeTab === 'explorer' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Left Sidebar: 29 File List */}
            <aside className="w-96 border-r border-neutral-800 bg-neutral-900/30 flex flex-col">
              <div className="p-3 border-b border-neutral-800 space-y-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    placeholder="Cari modul atau padanan Three.js..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-neutral-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex flex-wrap gap-1 text-[10px]">
                  {['all', 'aljabar', 'bounding', 'filter', 'koordinat', 'spektrum', 'interpolant', 'utilitas'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-2 py-0.5 rounded capitalize ${
                        selectedCategory === cat 
                          ? 'bg-indigo-600 text-white font-medium' 
                          : 'bg-neutral-950 text-neutral-400 hover:bg-neutral-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* File Scroll List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-2 py-1 font-bold">
                  Daftar 24 Modul (src/math/) & 5 Interpolants (src/math/interpolants/)
                </div>
                {filteredFiles.map(file => (
                  <button
                    key={file.id}
                    onClick={() => setSelectedFile(file)}
                    className={`w-full text-left p-2.5 rounded-lg border transition flex flex-col gap-1 ${
                      selectedFile.id === file.id
                        ? 'bg-indigo-600/15 border-indigo-500/40 text-neutral-100'
                        : 'border-transparent text-neutral-400 hover:bg-neutral-900/60 hover:text-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-semibold flex items-center gap-1.5 text-indigo-300">
                        <FileCode className="w-3.5 h-3.5" />
                        {file.name}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500 bg-neutral-950 px-1.5 py-0.5 rounded">
                        #{file.id}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Turunan: <strong className="text-neutral-300 font-mono">{file.threeJsEquivalent}</strong></span>
                      <span className="text-[10px] uppercase text-emerald-400/80">{file.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* Right Panel: File Deep-Dive Inspector */}
            <div className="flex-1 flex flex-col overflow-y-auto bg-neutral-950 p-6 space-y-6">
              <div className="border border-neutral-800 rounded-xl bg-neutral-900/40 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-neutral-500">{selectedFile.folder} /</span>
                      <h2 className="text-lg font-bold font-mono text-indigo-300">{selectedFile.name}</h2>
                    </div>
                    <p className="text-xs text-neutral-300">{selectedFile.description}</p>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">Warisan Asli Three.js</span>
                    <span className="text-sm font-bold font-mono text-emerald-400">{selectedFile.threeJsEquivalent}</span>
                  </div>
                </div>

                {/* Formula Highlight */}
                <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 space-y-1">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">Rumus / Logika Matematis Media Sosial</div>
                  <div className="font-mono text-sm text-amber-300 font-medium">
                    {selectedFile.formula}
                  </div>
                </div>

                {/* 6 Pillars in this file */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80">
                    <div className="text-neutral-500 text-[10px] font-mono uppercase">Duck Typing Flag</div>
                    <div className="font-mono text-emerald-400 mt-1">is{selectedFile.name.replace('.js', '')}: true</div>
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80">
                    <div className="text-neutral-500 text-[10px] font-mono uppercase">Instance Identifier</div>
                    <div className="font-mono text-indigo-400 mt-1">this.uuid = SocialMathUtils.generateUUID()</div>
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80">
                    <div className="text-neutral-500 text-[10px] font-mono uppercase">Format Kode</div>
                    <div className="font-mono text-cyan-400 mt-1">Pure JS (.js) ES Module + JSDoc</div>
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80">
                    <div className="text-neutral-500 text-[10px] font-mono uppercase">Private Variable</div>
                    <div className="font-mono text-purple-400 mt-1">this._x, this._reach + _onChangeCallback</div>
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80">
                    <div className="text-neutral-500 text-[10px] font-mono uppercase">Operasi Chaining</div>
                    <div className="font-mono text-amber-400 mt-1">.set(), .add(), .sub() return this</div>
                  </div>
                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800/80">
                    <div className="text-neutral-500 text-[10px] font-mono uppercase">Zero Memory Overhead</div>
                    <div className="font-mono text-rose-400 mt-1">Module scratch cache _temp</div>
                  </div>
                </div>
              </div>

              {/* Code Snippet from the File */}
              <div className="border border-neutral-800 rounded-xl bg-neutral-900/30 overflow-hidden">
                <div className="px-4 py-2.5 bg-neutral-900/80 border-b border-neutral-800 flex items-center justify-between text-xs">
                  <span className="font-mono text-neutral-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    Source Preview ({selectedFile.name})
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">100% Three.js Coding Style</span>
                </div>
                <div className="p-4 font-mono text-xs text-neutral-300 overflow-x-auto bg-neutral-950">
                  <pre>{`import { SocialMathUtils } from './SocialMathUtils.js';

/**
 * ${selectedFile.description}
 * Warisan dari: ${selectedFile.threeJsEquivalent}
 */
class ${selectedFile.name.replace('.js', '')} {

	constructor() {

		${selectedFile.name.replace('.js', '')}.prototype.is${selectedFile.name.replace('.js', '')} = true;

		this.name = '${selectedFile.name.replace('.js', '')}';
		this.uuid = SocialMathUtils.generateUUID();
		this._onChangeCallback = () => {};

	}

	// Operasi in-place dan fluent chaining
	set(...) {
		// update state
		this._onChangeCallback();
		return this;
	}

}

export { ${selectedFile.name.replace('.js', '')} };`}</pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="flex-1 overflow-y-auto p-6 max-w-6xl mx-auto space-y-6">
            <div>
              <h2 className="text-lg font-bold text-neutral-100 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                Live Social Media Mathematics Engine (Semua Formula Aktif)
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Kalkulator interaktif yang menjalankan formula matematika media sosial murni dari file-file modul di atas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Vector 3D */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                  <h3 className="font-mono text-sm font-bold text-indigo-300">EngagementVector3.js (Vector3)</h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">isVector3</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-neutral-400 block mb-1">Reach ({reach.toLocaleString()})</label>
                    <input type="range" min="1000" max="100000" step="1000" value={reach} onChange={e => setReach(Number(e.target.value))} className="w-full accent-indigo-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Engagement ({engagement.toLocaleString()})</label>
                    <input type="range" min="100" max="10000" step="100" value={engagement} onChange={e => setEngagement(Number(e.target.value))} className="w-full accent-indigo-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Sentiment Valence ({sentiment.toFixed(2)})</label>
                    <input type="range" min="-1" max="1" step="0.05" value={sentiment} onChange={e => setSentiment(Number(e.target.value))} className="w-full accent-indigo-500" />
                  </div>

                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800 space-y-2 mt-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">isViral</span>
                      <span className={`font-mono font-bold ${vectorInstance.isViral ? 'text-rose-400' : 'text-neutral-500'}`}>
                        {vectorInstance.isViral ? 'TRUE' : 'FALSE'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">isToxic</span>
                      <span className={`font-mono font-bold ${vectorInstance.isToxic ? 'text-amber-400' : 'text-neutral-500'}`}>
                        {vectorInstance.isToxic ? 'TRUE' : 'FALSE'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: K-Factor */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                  <h3 className="font-mono text-sm font-bold text-emerald-300">ViralityKFactor (Sphere R0)</h3>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">K = i * c</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-neutral-400 block mb-1">Invites / User (i = {invites})</label>
                    <input type="range" min="0.5" max="5.0" step="0.1" value={invites} onChange={e => setInvites(Number(e.target.value))} className="w-full accent-emerald-500" />
                  </div>
                  <div>
                    <label className="text-neutral-400 block mb-1">Conversion Rate (c = {(conversion * 100).toFixed(0)}%)</label>
                    <input type="range" min="0.05" max="0.95" step="0.05" value={conversion} onChange={e => setConversion(Number(e.target.value))} className="w-full accent-emerald-500" />
                  </div>

                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800 space-y-2 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Nilai K-Factor</span>
                      <span className="font-mono font-bold text-base text-emerald-400">{kFactorValue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Status Penularan</span>
                      <span className="font-mono text-neutral-300">
                        {kFactorValue >= 1.5 ? 'SUPER SPREADER' : kFactorValue >= 1.0 ? 'SELF-SUSTAINING' : 'SUB-CRITICAL'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Wilson Ranking */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                  <h3 className="font-mono text-sm font-bold text-amber-300">Wilson Score (Reddit Algorithm)</h3>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">SocialMathUtils</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-neutral-400 block mb-1">Upvotes ({upvotes})</label>
                      <input type="number" value={upvotes} onChange={e => setUpvotes(Number(e.target.value))} className="w-full bg-neutral-950 p-1.5 rounded border border-neutral-800 font-mono" />
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">Downvotes ({downvotes})</label>
                      <input type="number" value={downvotes} onChange={e => setDownvotes(Number(e.target.value))} className="w-full bg-neutral-950 p-1.5 rounded border border-neutral-800 font-mono" />
                    </div>
                  </div>

                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Skor Wilson Lower Bound</span>
                      <span className="font-mono font-bold text-amber-400">{wilsonScore.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Rasio Biasa</span>
                      <span className="font-mono">{((upvotes / (upvotes + downvotes || 1)) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Retention Interpolant */}
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-800 pb-2">
                  <h3 className="font-mono text-sm font-bold text-cyan-300">AudienceRetentionInterpolant.js</h3>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Interpolants/Bezier</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-neutral-400 block mb-1">Waktu Video ({checkSec} detik dari 60s)</label>
                    <input type="range" min="0" max="60" step="1" value={checkSec} onChange={e => setCheckSec(Number(e.target.value))} className="w-full accent-cyan-500" />
                  </div>

                  <div className="bg-neutral-950 p-3 rounded border border-neutral-800 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400">Estimasi Retensi Penonton</span>
                      <span className="font-mono font-bold text-base text-cyan-400">
                        {retentionInstance.evaluate(checkSec).toFixed(1)}%
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-500 font-mono">
                      Cubic Hermite smooth curve evaluation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="flex-1 overflow-y-auto p-6 max-w-5xl mx-auto space-y-6">
            <div>
              <h2 className="text-lg font-bold text-neutral-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                Daftar Lengkap 29 File (Pemetaan 1-ke-1 Warisan Three.js)
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Tepat 24 file di root `src/math/` dan 5 file di `src/math/interpolants/`, masing-masing mewarisi peran matematis dari modul Three.js.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/40">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono uppercase text-[11px]">
                  <tr>
                    <th className="p-3">#</th>
                    <th className="p-3">Modul Media Sosial</th>
                    <th className="p-3">Padanan Asli Three.js</th>
                    <th className="p-3">Folder</th>
                    <th className="p-3">Peran Matematis Media Sosial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 font-mono">
                  {ALL_29_FILES.map(item => (
                    <tr key={item.id} className="hover:bg-neutral-800/30 transition">
                      <td className="p-3 text-neutral-500">{item.id}</td>
                      <td className="p-3 font-semibold text-indigo-300">{item.name}</td>
                      <td className="p-3 text-emerald-400">{item.threeJsEquivalent}</td>
                      <td className="p-3 text-neutral-400">{item.folder}</td>
                      <td className="p-3 text-neutral-300 font-sans text-xs">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
