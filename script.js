const levels = [
  ["1","First Residents","1–2","Pink, Leaf, Stone","Algae","3"],
  ["2","First Instincts","3–4","Feather, Claws","Potatoes","4"],
  ["3","Small Possibilities","5–6","Dice, Meteorite","Corn","5"],
  ["4","First Benefits","7–8","Honey, Copper","Coral","10"],
  ["5","Boost","9–10","Wind, Fangs","Tomatoes","12"],
  ["6","First Effects","11–12","Fire, Cold","Wheat","14"],
  ["7","Weaken","13–14","Bubble, Mud","—","16"],
  ["8","The Weak Point","15–16","Target, Sad","Onions","18"],
  ["9","Superior Materials","17–18","Apple, Iron","—","24"],
  ["10","Strength & Speed","19–20","Crimson, Thorns","Carrots","26"],
  ["11","Fortune","21–22","Fortune, Electricity","—","28"],
  ["12","Light & Poison","23–24","Light, Poison","Bananas","30"],
  ["13","Debilitating States","25–26","Sleep, Shadow","—","32"],
  ["14","Hero Power","27–28","Notter, AI","Beans","34"],
  ["15","Superior Power","29–30","Netfil25, Diamond","—","40"],
  ["16","Extraordinary Forces","31–32","Tornado, Ice","Strawberries","41"],
  ["17","Offensive Power","33–34","Swords, Sloth","—","42"],
  ["18","Mortal Limit","35–36","Jellyfish, Heart","Oranges","43"],
  ["19","Legendary Power","37–38","Lonsdaleite, Star","—","44"],
  ["20","Legendary Strength","39–40","Devil, Planet","Grapes","45"],
  ["21","Divine Power","41–42","Divine, Ghost","—","46"],
  ["22","Duality","43–44","Frost, Sand","Chocolate","47"],
  ["23","Reflections","45–46","Mirror, Magma","—","48"],
  ["24","Unleashed Power","47–48","Radioactive, Flamingo","Peppers","49"],
  ["25","THE GREAT AQUARIUM","49–50","Arcade, Eclipse, Soldier","—","50"]
];

const groups = [
  ["❤️ Love","Leaf: +1/+2/+3/+5 Love","Honey: 1/2/3/4 Vitalized charges to team","Apple: +2/+4/+6/+10 Love","Netfil25: 2/3/4/5 Vitalized charges to team","Heart: 2/3/4/5 Vitalized + 5/5/5/10 Love"],
  ["🛡️ Defense","Stone: +1/+2/+3/+5 Defense","Copper: 1/2/3/4 Reinforced charges to team","Iron: +2/+4/+6/+10 Defense","Diamond: 2/3/4/5 Reinforced charges to team","Lonsdaleite: 2/3/4/5 Reinforced + 5/5/5/10 Defense"],
  ["💨 Speed","Feather: +1/+2/+3/+5 Speed","Wind: 1/2/3/4 Accelerated charges to team","Crimson: +2/+4/+6/+10 Speed","Tornado: 2/3/4/5 Accelerated charges to team","Star: 2/3/4/5 Accelerated + 5/5/5/10 Speed"],
  ["⚔️ Attack","Claws: +1/+2/+3/+5 Attack","Fangs: 1/2/3/4 Powered charges to team","Thorns: +2/+4/+6/+10 Attack","Swords: 2/3/4/5 Powered charges to team","Devil: 2/3/4/5 Powered + 5/5/5/10 Attack"],
  ["🎯 Critical","Dice: +1/+2/+3/+5% Critical Chance","Fortune: +10/+15/+20/+40% Critical Chance","Meteorite: +2/+4/+6/+10% Critical Damage","Notter: +10/+30/+60/+100% Critical Damage","Planet: +15/+50/+75/+100% Crit Chance and +30/+90/+200/+300% Crit Damage"],
  ["🧪 Effects","Fire → 1/2/3/5 Suffocated","Ice → 1/2/3/5 Numb","Poison → 1/2/3/5 Confused","Electricity → 1/2/3/5 Sparkling","Light → 1/2/3/5 Dazzled"],
  ["🧪 Effects","Cold → 1/2/3/5 Weakened","Bubble → 1/2/3/5 Unprotected","Mud → 1/2/3/5 Slow","Target → 1/2/3/5 Exposed","Sad → 1/2/3/5 Resentful"],
  ["🧪 Effects","Sleep → 1/2/3/5 Tired","Shadow → 1/2/3/5 Dimmed","AI → 1/2/3/5 Shut Down","Sloth → 1/2/3/5 Discouraged","Jellyfish → 1/2/3/5 Staggering"],
  ["🧪 Effects","Divine → 1/2/3/5 Enamored","—","—","—","—"],
  ["🪄 Double Effects","Ghost → Tired + Unprotected (1/2/3/5 each)","Frost → Weakened + Slow (1/2/3/5 each)","Sand → Staggering + Numb (1/2/3/5 each)","Mirror → Exposed + Discouraged (1/2/3/5 each)","Magma → Suffocated + Dazzled (1/2/3/5 each)"],
  ["🪄 Double Effects","Radioactive → Confused + Shut Down (1/2/3/5 each)","Flamingo → Enamored + Vitalized to team (1/2/3/5 each)","Arcade → Sparkling + Accelerated to team (1/2/3/5 each)","Eclipse → Dimmed + Reinforced to team (1/2/3/5 each)","Soldier → Resentful + Powered to team (1/2/3/5 each)"]
];

const worlds = [
  ["WORLD 1 — THE LITTLE POND",[
    ["1 — A New Home","Aquarium 1","Pink"],
    ["2 — First Movement","Aquarium 1","Leaf"],
    ["3 — First Differences","—","Leaf + Feather"],
    ["4 — Small Claws","Aquarium 2","Feather + Claws"],
    ["5 — Two vs Two","Aquarium 3","Leaf + Dice · Stone + Meteorite"],
    ["6 — First Effects","Aquarium 3","Fire + Claws · Cold + Feather"],
    ["7 — Weakening","Aquarium 4","Stone Bubble · Claw Mud"],
    ["8 — The Weak Point","Aquarium 4","Leaf Target · Sad Stone"],
    ["9 — Superior Materials","Aquarium 5","Apple + Wind · Iron + Fangs"],
    ["10 — The First Challenge","Aquarium 5","Apple + Fangs · Wind + Iron"]
  ]],

  ["WORLD 2 — WILD WATERS",[
    ["11 — Fortune Awakens","Aquarium 6","Fortune Fire · Cold + Electricity"],
    ["12 — Discharges","—","Electricity + Claws · Fire + Feather"],
    ["13 — Poison in the Water","Aquarium 7","Poison + Mud · Bubble + Target · Fire + Claws"],
    ["14 — The Lost Gaze","Aquarium 7","Mud + Stone · Target + Feather · Sad + Claws"],
    ["15 — Poison Apple","Aquarium 8","Apple + Poison · Bubble + Iron · Wind + Fangs"],
    ["16 — The Electric Eye","Aquarium 8","Electricity + Target · Sad + Mud · Bubble + Claws"],
    ["17 — Heart of Battle","Aquarium 9","Apple + Iron · Wind + Thorns · Target + Fangs"],
    ["18 — Steel & Poison","Aquarium 9","Poison + Iron · Apple + Thorns · Mud + Claws"],
    ["19 — Critical Speed","Aquarium 10","Wind + Crimson · Fortune + Thorns · Apple + Electricity"],
    ["20 — The Storm","Aquarium 10","Wind + Thorns · Electricity + Crimson · Fortune + Claws"]
  ]],

  ["WORLD 3 — THE DEPTHS",[
    ["21 — Deep Sleep","Aquarium 11","Sleep + Fortune · Electricity + Apple · Target + Iron"],
    ["22 — Dangerous Light","Aquarium 11","Light + Thorns · Poison + Crimson · Fortune + Mud"],
    ["23 — Four Shadows","Aquarium 12","Light + Claws · Poison + Iron · Sleep + Feather · Electricity + Thorns"],
    ["24 — Poison & Speed","Aquarium 12","Poison + Crimson · Light + Feather · Electricity + Claws · Sleep + Iron"],
    ["25 — Notter's Power","Aquarium 13","Sleep + Notter · Shadow + Apple · Fortune + Thorns · Light + Crimson"],
    ["26 — Fast Shadows","Aquarium 13","Shadow + Feather · Sleep + Thorns · Light + Iron · Poison + Claws"],
    ["27 — Artificial Intelligence","Aquarium 14","AI + Fortune · Shadow + Thorns · Sleep + Crimson · Light + Iron"],
    ["28 — The Darkened Kingdom","Aquarium 14","AI + Feather · Shadow + Claws · Poison + Thorns · Fortune + Iron"],
    ["29 — First Giants","Aquarium 15","Netfil25 + Iron · Diamond + Thorns · Tornado + Fortune · AI + Apple"],
    ["30 — Heart of the Depths","Aquarium 15","Netfil25 + Thorns · Diamond + Crimson · Tornado + Claws · AI + Fortune"]
  ]],

  ["WORLD 4 — THE GIANT KINGDOM",[
    ["31 — Eternal Ice","Aquarium 16","Ice + Thorns · Tornado + Iron · Netfil25 + Crimson · AI + Claws"],
    ["32 — Frozen Storm","Aquarium 16","Ice + Tornado · Diamond + Thorns · AI + Crimson · Netfil25 + Claws"],
    ["33 — Swords","Aquarium 17","Swords + Thorns · Sloth + Iron · Ice + Fortune · Tornado + Crimson"],
    ["34 — The Perfect Enemy","Aquarium 17","Swords + Iron · Sloth + Thorns · Ice + Crimson · Tornado + Fortune"],
    ["35 — Mortal Limit","Aquarium 18","Jellyfish + Thorns · Heart + Iron · Swords + Crimson · Ice + Fortune"],
    ["36 — Love & Destruction","Aquarium 18","Heart + Thorns · Jellyfish + Iron · Swords + Fortune · Sloth + Crimson"],
    ["37 — Legendary Power","Aquarium 19","Lonsdaleite + Swords · Star + Thorns · Heart + Crimson · Jellyfish + Fortune"],
    ["38 — Four Powers","Aquarium 19","Lonsdaleite + Iron · Star + Crimson · Swords + Thorns · Heart + Apple"],
    ["39 — Hero Power","Aquarium 20","Devil + Thorns · Planet + Fortune · Star + Iron · Heart + Crimson"],
    ["40 — The Colossus","Aquarium 20","Devil + Swords · Planet + Thorns · Star + Iron · Heart + Lonsdaleite"]
  ]],

  ["WORLD 5 — THE GREAT AQUARIUM",[
    ["41 — Divine Presence","Aquarium 21","Divine + Thorns · Ghost + Iron · Planet + Crimson · Star + Fortune"],
    ["42 — Curse","Aquarium 21","Ghost + Thorns · Divine + Iron · Devil + Crimson · Planet + Fortune"],
    ["43 — Frost","Aquarium 22","Frost + Thorns · Sand + Iron · Ghost + Crimson · Divine + Fortune"],
    ["44 — Sand & Ice","Aquarium 22","Sand + Thorns · Frost + Crimson · Divine + Iron · Planet + Devil"],
    ["45 — The Mirror","Aquarium 23","Mirror + Thorns · Magma + Iron · Frost + Crimson · Sand + Fortune"],
    ["46 — Reflection of Strength","Aquarium 23","Mirror + Devil · Magma + Star · Sand + Lonsdaleite · Planet + Heart"],
    ["47 — Radiation","Aquarium 24","Radioactive + Thorns · Flamingo + Iron · Mirror + Crimson · Magma + Fortune"],
    ["48 — The Final Element","Aquarium 24","Radioactive + Devil · Flamingo + Star · Mirror + Lonsdaleite · Magma + Planet"],
    ["49 — The Great Aquarium","Aquarium 25","Arcade + Thorns · Eclipse + Iron · Soldier + Crimson · Planet + Devil"],
    ["50 — THE END","Aquarium 25","Soldier + Planet · Arcade + Star · Eclipse + Lonsdaleite · Flamingo + Divine"]
  ]]
];


const supported = [
  "en","fr","it","de","es","bg","cs","zh-CN","zh-TW","ko","da",
  "es-419","fi","el","nl","hu","id","ja","ms","no","pl","pt-BR",
  "pt-PT","ro","ru","sv","th","tr","uk","vi","ar"
];

const translations = {};


function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }[c]));
}


/*
========================================================
CARGA DE IDIOMAS
========================================================
*/

async function loadLanguage(lang) {

  // Ya está cargado
  if (translations[lang]) {
    applyTranslations(translations[lang]);
    return;
  }

  try {

    const module = await import(
      `./translations/${lang}.js?cache=${Date.now()}`
    );

    if (!module.default) {
      throw new Error(
        `translations/${lang}.js no tiene "export default"`
      );
    }

    translations[lang] = module.default;

    applyTranslations(translations[lang]);

  } catch (error) {

    console.error(
      `ERROR cargando el idioma "${lang}":`,
      error
    );

    // Intentar inglés si falla otro idioma
    if (lang !== "en") {

      if (translations.en) {
        applyTranslations(translations.en);
      } else {

        try {

          const english = await import(
            `./translations/en.js?cache=${Date.now()}`
          );

          translations.en = english.default;

          applyTranslations(translations.en);

        } catch (englishError) {
          console.error(
            "Tampoco se pudo cargar el inglés:",
            englishError
          );
        }
      }
    }
  }
}


/*
========================================================
APLICAR TRADUCCIÓN
========================================================
*/

function applyTranslations(data) {

  if (!data) return;

  document.documentElement.lang = data.lang || "en";

  if (data.pageTitle) {
    document.title = data.pageTitle;
  }

  if (data.description) {
    const meta = document.querySelector(
      'meta[name="description"]'
    );

    if (meta) {
      meta.content = data.description;
    }
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.dataset.i18n;

    if (data[key] !== undefined) {
      el.innerHTML = data[key];
    }

  });

  const select = document.getElementById("languageSelect");

  if (select) {
    select.setAttribute(
      "aria-label",
      data.languageLabel || "Language"
    );
  }

  renderDynamicContent(data);
}


/*
========================================================
CONTENIDO DINÁMICO
========================================================
*/

function renderDynamicContent(data) {

  const levelList =
    document.getElementById("levelList");

  levelList.innerHTML = "";

  levels.forEach(x => {

    levelList.innerHTML += `
      <div class="level-item">
        <strong>
          ${escapeHtml(
            translate(data, `level.${x[0]}.title`, `Aquarium ${x[0]} — ${x[1]}`)
          )}
        </strong>
        <br>

        ${escapeHtml(
          translate(data, "dynamic.gameplayLevels", "Gameplay levels")
        )}
        ${x[2]}

        · <em>${escapeHtml(x[3])}</em>

        <br>

        ${escapeHtml(
          translate(data, "dynamic.food", "Food")
        )}:
        ${escapeHtml(x[4])}

        ·

        ${escapeHtml(
          translate(data, "dynamic.capacity", "Capacity")
        )}:
        ${x[5]}
        ${escapeHtml(
          translate(data, "dynamic.axolotls", "axolotls")
        )}
      </div>
    `;
  });


  /*
  -------------------------
  ABILITIES
  -------------------------
  */

  const ag =
    document.getElementById("abilityGroups");

  ag.innerHTML = "";

  const mergedGroups = [];

  groups.forEach(g => {

    const existing =
      mergedGroups.find(x => x[0] === g[0]);

    if (existing) {
      existing.push(...g.slice(1));
    } else {
      mergedGroups.push([...g]);
    }

  });

  mergedGroups.forEach((g, index) => {

    const translatedTitle =
      translate(
        data,
        `abilityGroup.${index}.title`,
        g[0]
      );

    ag.innerHTML += `
      <div class="ability-group">

        <h3>
          ${escapeHtml(translatedTitle)}
        </h3>

        <div class="ability-row">

          ${g.slice(1)
            .filter(v => v !== "—")
            .map((v, pieceIndex) => {

              const key =
                `abilityGroup.${index}.piece.${pieceIndex}`;

              return `
                <span>
                  ${escapeHtml(
                    translate(data, key, v)
                  )}
                </span>
              `;

            })
            .join("")}

        </div>

      </div>
    `;
  });


  /*
  -------------------------
  WORLDS
  -------------------------
  */

  const wl =
    document.getElementById("worldList");

  wl.innerHTML = "";

  worlds.forEach((w, worldIndex) => {

    const worldTitle =
      translate(
        data,
        `world.${worldIndex}.title`,
        w[0]
      );

    wl.innerHTML += `
      <div class="world">

        <h3>
          ${escapeHtml(worldTitle)}
        </h3>

        ${w[1].map((l, levelIndex) => {

          const title =
            translate(
              data,
              `world.${worldIndex}.level.${levelIndex}.title`,
              l[0]
            );

          const aquarium =
            translate(
              data,
              `world.${worldIndex}.level.${levelIndex}.aquarium`,
              l[1]
            );

          const enemies =
            translate(
              data,
              `world.${worldIndex}.level.${levelIndex}.enemies`,
              l[2]
            );

          return `
            <div class="world-level">

              <strong>
                ${escapeHtml(title)}
              </strong>

              ·
              ${escapeHtml(aquarium)}

              <br>

              ${escapeHtml(enemies)}

            </div>
          `;

        }).join("")}

      </div>
    `;
  });
}


/*
========================================================
TRADUCCIÓN CON FALLBACK
========================================================
*/

function translate(data, key, fallback) {

  if (
    data &&
    data[key] !== undefined
  ) {
    return data[key];
  }

  return fallback;
}


/*
========================================================
SELECTOR
========================================================
*/

const select =
  document.getElementById("languageSelect");

const saved =
  localStorage.getItem("oa-language");

const browser =
  navigator.language;

const match =
  supported.includes(browser)
    ? browser
    : (
        supported.find(
          x =>
            x.split("-")[0] ===
            browser.split("-")[0]
        ) || "en"
      );

select.value =
  supported.includes(saved)
    ? saved
    : match;


select.addEventListener(
  "change",
  () => {

    const language =
      select.value;

    localStorage.setItem(
      "oa-language",
      language
    );

    loadLanguage(language);

  }
);


/*
========================================================
INICIO
========================================================
*/

loadLanguage(select.value);