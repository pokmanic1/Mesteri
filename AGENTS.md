# Proiect: Platformă Locală de Meșteri (MVP Next.js)

## 1. Misiune & Viziune
Aplicație web ultra-simplă și accesibilă pentru oameni obișnuiți, care rezolvă rapid problemele casnice urgente (țevi, electricitate, zugrăvit) fără timp pierdut prin rude sau cunoștințe. Meșterii din zonă se găsesc acum doar prin recomandări; site-ul le oferă un loc unde pot fi văzuți și sunați direct. Interfața trebuie să fie curată, intuitivă și ușor de folosit de oricine, în special de pe telefon.

## 2. Arhitectură Tehnică & Specificații
* **Framework:** Next.js 16 (App Router, TypeScript) cu Tailwind CSS v4, pentru un design profesionist, modern și responsive (mobile-first, de la 375px).
* **Fără Backend / Auth:** În această fază **NU există bază de date** și **NU există sistem de autentificare** (login/register).
* **Gestionare Date:** Datele meșterilor sunt hardcodate în `utility/constants.ts`, într-un array de obiecte (`arrMesteri`). Fiecare meșter are un `slug` unic (folosit în URL) și o `categorieGenerala` (`electric`, `inginer`, `instalator`, `zugrav`), după care se face filtrarea.
* **Arie Geografică & Categorii:** Concentrat pe o zonă restrânsă, cu 4 categorii principale de meșteri la lansare.
* **Structură Pagini:** Doar câteva pagini esențiale: Homepage (`/`), Catalog meșteri (`/mesteri`), Profil individual (`/mesteri/[slug]`), Servicii (`/servicii`) și Despre (`/despre`).
* **Client vs Server:** Paginile (`page.tsx`) rămân componente server, fără `'use client'`. Starea și evenimentele (de exemplu filtrul) stau în componente separate din `components/`.

## 3. Ce Conține Profilul Fiecărui Meșter
Fiecare profil afișat pe site include strict următoarele elemente:
* Nume și Prenume
* Vârstă (opțional, momentan neafișată)
* Oraș
* Categorie / Specializare
* Ani de experiență
* Fotografie de profil
* Galerie foto cu lucrările efectuate
* Număr de telefon (buton mare, direct de apelare `tel:`)

## 4. Design & User Experience (UX/UI)
* **Design Profesionist:** Aspect vizual îngrijit, culori calde și de încredere, carduri clare, tipografie lizibilă. **Inspiră-te din paginile și componentele deja existente în proiect** (de exemplu `app/servicii` și `app/mesteri`) și păstrează același stil, aceleași clase Tailwind și aceleași butoane din `components/Buton.tsx`.
* **Simplitate Extremă:** Fără funcționalități complicate, pagini încărcate sau pași inutili. Utilizatorul intră, filtrează categoria, vede meșterul și îl sună direct. Dacă ceva pare încărcat, se scoate.
* **Onestitate:** Nu afirma nimic neadevărat în interfață (de exemplu „meșteri verificați" cât timp nu există verificare) și nu inventa prețuri sau recenzii.

## 5. Model de Business (Gândire Proiect)
* Primii 15–50 de meșteri înregistrați **GRATUIT**, adăugați manual de proprietar.
* Se măsoară apelurile (apăsările pe butonul „Sună") ca dovadă a valorii.
* Ulterior, introducerea unui preț minim (abonament) după ce meșterii primesc primele apeluri și validează valoarea platformei.

## 6. Paleta de culori
* **Albastru închis:** `#0F172A`
* **Galben:** `#F59E0B`
* **Portocaliu:** `#EA580C`
* **Alb:** `#F8FAFC`

## 7. Fonturile
* **Montserrat Bold** – principal (titluri)
* **Open Sans Regular** – secundar (text)

## 8. Skill-uri & Cerințe pentru Agentul AI
Când lucrezi cu mine la acest proiect, aplică următoarele competențe:
* **Senior Next.js & React Developer:** Cod curat, structurat modular, performant, scris pentru App Router. Alege mereu soluția cea mai simplă.
* **UI/UX Designer Specializat pe Simplitate:** Interfețe moderne (Tailwind CSS) gândite pentru utilizatori non-tehnici.
* **Prototyping & Lean Startup Mindset:** Axat pe soluții rapide, fără supraingineria tehnică (overengineering).
* **Mod de lucru:** Răspunde în română, scurt și clar. Dă doar fișierele modificate (fără zip), spune unde se pune fiecare și menționează ce ai testat.

## Design de tip https://heronaiapp.com/ – simplu și modern

