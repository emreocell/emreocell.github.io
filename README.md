# 🌐 emreocell.github.io — Personal Portfolio

> **Emre Öcel** — Computer Engineer & Full Stack Web Developer  
> Live: [https://emreocell.github.io](https://emreocell.github.io)

---

## 📋 İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Canlı Demo](#canlı-demo)
- [Özellikler](#özellikler)
- [Teknoloji Stack'i](#teknoloji-stacki)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum & Lokal Geliştirme](#kurulum--lokal-geliştirme)
- [İçerik Güncelleme Rehberi](#içerik-güncelleme-rehberi)
- [Blog Yazısı Ekleme](#blog-yazısı-ekleme)
- [Deploy](#deploy)
- [SEO & Performans](#seo--performans)
- [Lisans](#lisans)

---

## Proje Hakkında

Bu repository, [Emre Öcel](https://emreocell.github.io)'in kişisel portfolyo ve blog sitesinin kaynak kodunu içerir. Site aşağıdaki hedefler doğrultusunda tasarlanmıştır:

- **Profesyonel Marka:** Bilgisayar Mühendisi kimliğini öne çıkaran modern bir dijital kimlik
- **İş & Freelance:** Potansiyel işverenler ve freelance müşteriler için showcase
- **Backlink Ağı:** [Webioo Dijital Ajans](https://www.webioo.com.tr/) için organik SEO backlinkleri
- **Blog:** Yazılım, web teknolojileri ve sektör deneyimleri üzerine kaliteli içerikler

---

## Canlı Demo

🔗 **[https://emreocell.github.io](https://emreocell.github.io)**

| Sayfa | URL |
|-------|-----|
| Ana Sayfa | `/` |
| Blog Arşivi | `/blog/` |
| Sitemap | `/sitemap.xml` |
| RSS Feed | `/feed.xml` |

---

## Özellikler

### 🎨 Tasarım
- **Awwwards-standart** premium dark mode tasarım
- **Monokrom renk paleti** — siyah, beyaz ve gri tonlarında
- Dark / Light tema toggle (tercih localStorage'a kaydedilir)
- `Space Grotesk` + `Inter` + `JetBrains Mono` tipografi sistemi
- Glassmorphism ve micro-animation detayları
- Tamamen mobil responsive

### 🚀 Performans & Animasyon
- **Three.js** — Interaktif 3D Icosahedron wireframe arkaplan sahnesi
- **GSAP + ScrollTrigger** — Scroll bazlı reveal animasyonları
- GSAP animasyon güvenlik ağı: JS yüklenemese bile içerik görünür kalır
- `invalidateOnRefresh: true` ile F5 / Ctrl+Shift+R dayanıklılığı
- `ResizeObserver` ile layout shift sonrası otomatik ScrollTrigger refresh

### 🌍 Çok Dil
- **TR / EN** dil desteği (i18next CDN)
- Dil tercihi localStorage'a kaydedilir

### 🔍 SEO
- `jekyll-seo-tag` → Otomatik meta, OG ve Twitter Card etiketleri
- `jekyll-sitemap` → Otomatik `sitemap.xml` üretimi
- `jekyll-feed` → RSS `feed.xml`
- Schema.org `BlogPosting` markup (post sayfaları)
- `robots.txt` ve `llms.txt` (AI crawler uyumluluğu)
- Google Search Console doğrulama dosyası

### 📝 Blog
- Jekyll `_posts/` sistemi — Markdown ile kolayca yazı ekleme
- Her post için cover image desteği
- Okuma süresi ve dil etiketi
- Webioo'ya organik backlink entegrasyonu

### 📬 İletişim
- FormSubmit tabanlı serverless form (zero backend)
- Spam koruması (honeypot)
- Gönderim sonrası yönlendirme

---

## Teknoloji Stack'i

| Katman | Teknoloji |
|--------|-----------|
| **Static Site Generator** | Jekyll (GitHub Pages native) |
| **Hosting** | GitHub Pages |
| **3D Grafik** | Three.js (CDN) |
| **Animasyon** | GSAP + ScrollTrigger (CDN) |
| **Çok Dil** | i18next (CDN) |
| **CSS** | Vanilla CSS, CSS Custom Properties |
| **JavaScript** | Vanilla JS (no framework) |
| **Form Backend** | FormSubmit.co |
| **Font** | Google Fonts (Space Grotesk, Inter, JetBrains Mono) |

> ⚠️ Hiçbir npm build pipeline yoktur. Tüm JS CDN veya statik `/assets/js/` altında yüklenir.

---

## Proje Yapısı

```
emreocell.github.io/
│
├── _config.yml              # Jekyll yapılandırması (URL, email, sosyal medya)
├── _data/
│   ├── projects.yml         # Proje kartları verisi
│   └── skills.yml           # Yetenek barları verisi
├── _includes/
│   ├── header.html          # Site header + navigasyon
│   ├── footer.html          # Footer + Webioo backlinkleri
│   └── 3d-scene.html        # Three.js canvas container
├── _layouts/
│   ├── default.html         # Tüm sayfalar için temel layout
│   ├── page.html            # Genel sayfa layout'u
│   └── post.html            # Blog yazısı layout'u (Schema.org içerir)
├── _posts/                  # Blog yazıları (Markdown)
│   ├── 2026-04-09-kurumsal-web-projelerinde-teknoloji-secimi.md
│   ├── 2025-04-05-basarili-web-sitesi-teknik-kriterler.md
│   └── 2025-03-20-kobiler-icin-e-ticaret-rehberi.md
├── assets/
│   ├── css/
│   │   └── main.css         # Tüm stiller (design system, components, responsive)
│   ├── js/
│   │   ├── main.js          # Tema toggle, dil toggle, scroll, proje filtresi
│   │   ├── animations.js    # GSAP ScrollTrigger animasyonları
│   │   ├── three-scene.js   # Three.js 3D sahne (tema uyumlu)
│   │   └── i18n.js          # TR/EN çeviri sistemi
│   └── images/
│       ├── favicon.svg      # SVG favicon
│       ├── og-image.jpg     # Open Graph / sosyal medya görseli (1200×630)
│       └── blog/
│           ├── techstack.jpg
│           ├── performance.jpg
│           └── ecommerce.jpg
├── blog/
│   └── index.html           # Blog arşiv sayfası
├── 404.html                 # Özel 404 sayfası
├── index.html               # Ana sayfa (tek scroll deneyimi)
├── robots.txt               # SEO crawler direktifleri
├── llms.txt                 # AI model crawler içeriği (llms.txt standardı)
├── Gemfile                  # Ruby bağımlılıkları (Jekyll)
└── README.md                # Bu dosya
```

---

## Kurulum & Lokal Geliştirme

### Yöntem 1 — Python ile Hızlı Önizleme (Önerilen)

Jekyll kurulumu gerektirmez. Sadece tasarım ve statik sayfaları test etmek için:

```bash
# Proje dizininde çalıştır
python -m http.server 8080
```

Ardından [http://localhost:8080/preview.html](http://localhost:8080/preview.html) adresini aç.

> **Not:** Python sunucusu Jekyll'i derleyemez. `_posts/` içindeki Markdown dosyaları ve `{{ }}` Liquid etiketleri bu yöntemde çalışmaz. Bunları test etmek için Jekyll kurulumu gereklidir.

---

### Yöntem 2 — Jekyll ile Tam Derleme

Önce Ruby ve Bundler kurulu olmalı:

```bash
# Bağımlılıkları yükle
bundle install

# Geliştirme sunucusunu başlat
bundle exec jekyll serve

# Tarayıcıda aç
open http://localhost:4000
```

Bu yöntemle blog yazıları, sitemap, permalinkler ve tüm Liquid şablonları tam olarak çalışır.

---

## İçerik Güncelleme Rehberi

### Kişisel Bilgiler

`_config.yml` dosyasını düzenle:

```yaml
title: "Emre Öcel | Computer Engineer & Web Developer"
description: "..."
url: "https://emreocell.github.io"

author:
  name: "Emre Öcel"
  email: "emreocell1219@gmail.com"

social:
  github: "emreocell"
  linkedin: "emreocel"
```

---

### Projeleri Güncelleme

`_data/projects.yml` dosyasını düzenle:

```yaml
github:
  - name: "Proje Adı"
    description_tr: "Türkçe açıklama."
    description_en: "English description."
    url: "https://github.com/emreocell/proje-adi"
    language: "JavaScript"
    stars: 5
    tags: ["React", "Node.js", "MongoDB"]

client:
  - name: "Müşteri Sitesi"
    description_tr: "Proje açıklaması."
    description_en: "Project description."
    url: "https://example.com"
    image: "/assets/images/projects/client1.jpg"
    tags: ["PHP", "MySQL"]
```

---

### Yetenekleri Güncelleme

`_data/skills.yml` dosyasını düzenle:

```yaml
frontend:
  - name: "React"
    level: 85   # 0-100 arası

backend:
  - name: "Laravel"
    level: 88

app:
  - name: "Swift"
    level: 60
```

---

## Blog Yazısı Ekleme

`_posts/` klasörüne `YYYY-MM-DD-url-slugi.md` formatında yeni bir dosya ekle:

```markdown
---
layout: post
title: "Blog Yazısının Başlığı"
date: 2026-05-01
lang: tr
description: "Meta açıklaması (150-160 karakter ideal)"
reading_time: 7
image: /assets/images/blog/yeni-gorsel.jpg
---

Giriş paragrafı burada başlar...

## Başlık 1

İçerik...

## Başlık 2

İçerik...

---
*Kapanış notu.*
```

> ✅ Yazı dosyasının adı URL'yi belirler. `2026-05-01-react-hooks-rehberi.md` → `/blog/react-hooks-rehberi/`

---

## Deploy

Bu site GitHub Pages ile host edilir. Deploy etmek için:

```bash
git add .
git commit -m "feat: yeni içerik eklendi"
git push origin main
```

GitHub Actions otomatik olarak Jekyll build'i çalıştırır ve siteyi `https://emreocell.github.io` adresinde yayınlar.

### Deploy Sonrası Kontroller

- [ ] `https://emreocell.github.io` açılıyor
- [ ] `https://emreocell.github.io/sitemap.xml` erişilebilir
- [ ] `https://emreocell.github.io/feed.xml` erişilebilir
- [ ] `https://emreocell.github.io/blog/` blog listesi görünüyor
- [ ] İletişim formu gönderimi çalışıyor (FormSubmit aktivasyon maili gelebilir)

> **FormSubmit İlk Kullanım:** İlk form gönderiminden sonra `emreocell1219@gmail.com` adresine aktivasyon maili gelecektir. "Confirm your submission" butonuna tıkla. Sonraki tüm gönderimler doğrudan gelen kutusuna düşer.

---

## SEO & Performans

### Aktif SEO Araçları

| Araç | Açıklama |
|------|----------|
| `jekyll-seo-tag` | Otomatik title, description, OG, Twitter Card |
| `jekyll-sitemap` | `/sitemap.xml` otomatik üretimi |
| `jekyll-feed` | `/feed.xml` RSS akışı |
| Schema.org | Blog yazıları için `BlogPosting` yapısal veri |
| `robots.txt` | Crawler direktifleri |
| `llms.txt` | AI model crawler uyumluluğu |

### Google Search Console

`google48465167554dc891.html` dosyası proje kökünde mevcut → GSC doğrulaması aktif.

### Open Graph Görseli

`assets/images/og-image.jpg` (1200×630px) sosyal medya paylaşımlarında otomatik görünür.

---

## Lisans

Bu proje kişisel kullanım içindir. Kaynak kodu referans amaçlı incelenebilir ancak doğrudan kopyalanıp kullanılamaz.

---

<div align="center">

**Emre Öcel** · [emreocell.github.io](https://emreocell.github.io) · [LinkedIn](https://linkedin.com/in/emreocel) · [GitHub](https://github.com/emreocell)

*[Webioo Dijital Ajans](https://www.webioo.com.tr/) bünyesinde web geliştirici*

</div>
