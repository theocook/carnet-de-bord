// src/data.js

export const sessionData = {
    1: {
        date: "18 Septembre 2025",
        method: "Hatha Yoga",
        exercise: "Salutation au Soleil",
        image: "/1.webp", // Tu pourras mettre tes images locales ici (ex: "/mon-image.jpg")
        learned: {
            text: "Enchaînement dynamique et cyclique de 12 postures (asanas) synchronisées avec le souffle. On alterne flexions avant et extensions arrière (montagne, pince debout, fente, planche, cobra, chien tête en bas)."
        },
        feelings: {
            physique: "Montée rapide de la température corporelle. J'ai senti une forte raideur dans la chaîne postérieure (ischio-jambiers) lors de la 'pince', limitant ma flexion. Sensation de force dans les bras, mais manque de souplesse globale.",
            respiration: "Difficile de caler la respiration sur le mouvement. J'avais tendance à faire de l'apnée ou à respirer à contre-temps (inspirer quand il fallait expirer). Rythme saccadé.",
            mental: "Charge mentale élevée car je devais m'efforcer de mémoriser l'ordre des mouvements. Pas de 'lâcher- prise', j'étais très analytique et concentré sur la forme pour ne pas me tromper."
        },
        analysis: {
            quoi: "La mémorisation de la séquence de base (Série A). Le concept de 'Vinyasa' (lier le mouvement à la respiration), même si c'est encore théorique pour moi.",
            satisfaction: "Moyenne. Physiquement, c'est accessible, mais je vois que je ne suis pas assez souple par rapport à la fluidité demandée.",
            progression: "Fluidifier les transitions (ne pas s'arrêter entre chaque pose) et réussir à synchroniser une inspiration/expiration par mouvement sans y penser.",
            utility: "Excellent échauffement articulaire et cardio-vasculaire avant une séance de fitness ou de musculation. Permet un réveil musculaire global."
        }
    },

    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    2: {
        date: "25 Septembre 2025",
        method: "Hatha Yoga",
        exercise: "L'Arbre (Vrksasana)",
        image: "/2.webp",
        learned: {
            text: "Posture d'équilibre debout sur une jambe. Il s'agit de placer le pied de la jambe libre à l'intérieur de la cuisse (ou du mollet) de la jambe de terre, en ouvrant la hanche. Les mains sont jointes devant le cœur ou au-dessus de la tête. C'est un jeu de poids et de contre-poids."
        },
        feelings: {
            physique: "Beaucoup de micro-mouvements dans la cheville d'appui pour ne pas tomber (recherche d'équilibre). J'ai senti la difficulté de garder le bassin de face tout en ouvrant le genou sur le côté.",
            respiration: "Dès que je perdais l'équilibre, je bloquais ma respiration. J'ai dû faire un effort conscient pour garder une respiration fluide malgré l'instabilité, car j'avais tendance à faire de l'apnée pour avoir de la concentration.",
            mental: "J'ai remarqué que si mon regard quittait le point fixe à l'horizon, je tombais plus facilement. La concentration devait être totale ; très focus sur le moment."
        },
        analysis: {
            quoi: "L'importance de l'ancrage au sol (imaginer des racines) avant même de lever la jambe. J'ai bien ressenti le concept de proprioception : ma capacité à ressentir finement mon corps pour m'adapter à l'instabilité.",
            satisfaction: "Valorisant quand on tient quelques secondes sans bouger. Je sens que cela renforce mes muscles profonds et stabilisateurs, ce que je ne travaille pas assez en musculation classique.",
            progression: "Réussir à monter les bras au ciel sans perdre l'ancrage, et tenir la posture les yeux fermés (très difficile pour l'instant).",
            utility: "Très utile pour la prévention des blessures (chevilles/genoux) grâce au renforcement des ligaments et capsules. Cela améliore ma concentration et ma réactivité mentale, utile dans n'importe quel sport de réaction."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    3: {
        date: "2 Octobre 2025",
        method: "Hatha Yoga",
        exercise: "Le Cobra (Bhujangasana)",
        image: "/3.webp",
        learned: {
            text: "Posture d'extension de la colonne vertébrale. Couché sur le ventre, mains sous les épaules, jambes largeur du bassin. J'inspire en soulevant le buste grâce aux muscles du dos, en gardant le bassin plaqué au sol et les coudes fléchis contre les flancs."
        },
        feelings: {
            physique: "Au début, j'ai eu le réflexe de pousser fort sur mes bras (comme une pompe), ce qui a coincé mes lombaires. En corrigeant (moins de bras, plus de dos), j'ai senti un étirement intense sur la face avant (abdominaux, pectoraux)  et une contraction forte dans le bas du dos. J'ai dû respecter mon 'stop' pour ne pas me faire mal.",
            respiration: "J'ai commencé à synchroniser : 'Inspirer pour tout mouvement qui ouvre l'avant du corps'. C'était difficile de respirer amplement avec le ventre comprimé contre le sol.",
            mental: "Sensation d'ouverture qui fait du bien au moral, mais demande de la vigilance pour ne pas crisper les épaules vers les oreilles. J'ai essayé d'appliquer la notion de 'juste effort' (ne pas forcer inutilement)."
        },
        analysis: {
            quoi: "Que cette posture n'est pas un exercice de force des bras, mais de mobilité du rachis. Elle stimule les reins et les surrénales, ce qui aide à réguler le stress. C'est une posture qui active le système parasympathique par l'alternance compression/étirement.",
            satisfaction: "Agréable de sentir l'ouverture de la cage thoracique ('thorax'), car je suis souvent voûté (ordinateur/études).",
            progression: "Réussir à monter un peu plus haut sans décoller le bassin et sans douleur lombaire, pour gagner en flexibilité de la colonne.",
            utility: "Excellent mouvement compensatoire pour la musculation (qui a tendance à enrouler les épaules vers l'avant) et pour contrer la position assise des cours théoriques."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    4: {
        date: "9 Octobre 2025",
        method: "Hatha Yoga / Stretching assisté",
        exercise: "Étirement des ceintures scapulaires (en binôme)",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
        learned: {
            text: "Exercice de relaxation et d'étirement passif pratiqué à deux. Je suis allongé sur le ventre, bras tendus au-dessus de la tête. Mon partenaire, assis devant moi (en posture du diamant ou genoux relevés), saisit mes poignets. Il exerce une traction douce, progressive et régulière vers l'arrière pour étirer mes épaules et omoplates, tout en pressant un point énergétique spécifique sur mes poignets."
        },
        feelings: {
            physique: "Au début, j'avais le réflexe de contracter mes épaules et même mes fessiers pour 'aider' ou par protection. J'ai dû faire un effort conscient pour détendre mes cuisses et fessiers comme demandé. La pression sur l'os pisiforme (poignet) ne m'a pas réellement procuré une sensation de détente immédiate.",
            respiration: "J'ai calé ma respiration sur l'étirement (minimum 6 cycles inspir-expir). J'ai senti que l'expiration longue activait mon système parasympathique, me permettant de relâcher les tensions musculaires accumulées.",
            mental: "Exercice de confiance. Il faut accepter de ne rien faire et de laisser l'autre gérer l'intensité. La communication était importante pour signaler mon 'stop' avant que l'étirement ne devienne douloureux."
        },
        analysis: {
            quoi: "J'ai découvert que la respiration nasale absorbe le 'prana' (énergie vitale) et que le relâchement musculaire est commandé par le cerveau via le système nerveux parasympathique. J'ai aussi appris l'emplacement d'un point énergétique au poignet qui favorise la relaxation.",
            satisfaction: "Elevée. C'est rare de sentir un étirement aussi profond sans avoir à fournir d'effort musculaire soi-même. Sensation de légèreté dans le haut du dos après la séance.",
            progression: "Réussir à me détendre ('poids mort') dès la prise en main par le partenaire, sans phase d'adaptation.",
            utility: "Idéal pour récupérer après une séance de musculation du haut du corps (pectoraux/dos). Cela permet de décomprimer la cage thoracique et d'améliorer ma mobilité d'épaule pour les mouvements de 'press'."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    5: {
        date: "16 Octobre 2025",
        method: "Hatha Yoga",
        exercise: "La Planche sur le côté (Vasisthasana)",
        image: "/5.webp",
        learned: {
            text: "Posture de gainage latéral en équilibre sur une seule main. Le corps doit former une ligne droite de la tête aux talons. Le bras de terre est tendu, l'autre est levé vers le ciel. L'exercice engage fortement les abdominaux (obliques) et les muscles des jambes."
        },
        feelings: {
            physique: "J'ai senti une forte sollicitation de l'épaule et du poignet d'appui, plus intense que dans mes gainages habituels sur les coudes. J'ai ressenti le tremblement lié à la recherche d'équilibre (proprioception). Mes obliques chauffait pour maintenir le bassin haut.",
            respiration: "Respiration contrainte. J'avais tendance à bloquer mon souffle à cause de l'effort intense de gainage. J'ai dû me forcer à respirer petit à petit pour oxygéner les muscles malgré la contraction.",
            mental: "J'étais étrangement bien durant cette exercice, bien que très concentré. J'ai perdu quelques fois l'équilibre, mais rien d'alarmant au niveau du mental et de ma concentration. J'ai essayé d'accepter ce déséquilibre pour me stabiliser calmement au lieu de m'énerver."
        },
        analysis: {
            quoi: "Cet exercice renforce la stabilité et la mobilité de l'épaule. J'ai appris que l'émotion (frustration de chuter) est une information et que je peux choisir de l'accepter plutôt que de la supprimer ou de me juger sévèrement.",
            satisfaction: "Bonne. Je me sens fort physiquement, même si l'équilibre est encore perfectible.",
            progression: "Réussir à tourner la tête pour regarder la main levée vers le ciel (ce qui déstabilise énormément) sans perdre l'alignement.",
            utility: "Très utile pour protéger ma colonne vertébrale et améliorer ma posture globale. Le renforcement des épaules est bénéfique pour mes mouvements de poussée en musculation."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    6: {
        date: "23 Octobre 2025",
        method: "Hatha Yoga",
        exercise: "Le Demi-Pont (Setu Bandhasana)",
        image: "/6.webp",
        learned: {
            text: "Posture d'inversion douce en appui sur le dos. Genoux pliés, pieds à plat au sol alignés avec les hanches. Je soulève le bassin vers le ciel en poussant sur les pieds et les épaules, tout en rentrant le menton vers le sternum."
        },
        feelings: {
            physique: "J'ai senti une forte contraction des fessiers et des ischio-jambiers pour maintenir l'extension des hanches. J'ai ressenti une compression inhabituelle au niveau de la gorge (thyroïde) due à la position du menton, mais une ouverture agréable de la cage thoracique.",
            respiration: "La respiration abdominale était limitée par l'extension, j'ai donc dû placer mon souffle dans le haut du thorax.",
            mental: "Une sensation d'apaisement lente. Bien que l'effort musculaire soit présent dans les jambes, le haut du corps était en détente relative. J'ai senti que cela calmait mon agitation mentale."
        },
        analysis: {
            quoi: "J'ai appris que cette posture agit sur la régulation de la pression artérielle et le système nerveux, favorisant la récupération. C'est un outil physique pour passer du 'distress' (stress négatif, épuisant) à un état d'équilibre, en aidant l'organisme à récupérer après une charge de travail. Elle prépare aussi aux inversions plus complexes comme la chandelle.",
            satisfaction: "Satisfaisante. C'est un pont entre le renforcement musculaire (que j'aime) et la relaxation.",
            progression: "Réussir à garder les genoux strictement parallèles (ne pas les laisser s'écarter) tout en montant le bassin plus haut, et rapprocher les talons des fessiers.",
            utility: "Excellent pour compenser les positions assises (cours théoriques) ou les sports qui 'ferment' les épaules (boxe, vélo). Utile aussi comme récupération active après une compétition."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    7: {
        date: "30 Octobre 2025",
        method: "Pranayama (Technique respiratoire du Yoga)",
        exercise: "Uddiyana Bandha (L'envol / Le blocage abdominal)",
        image: "/7.webp",
        learned: {
            text: "Exercice de fausse inspiration thoracique exécutée poumons vides. Debout, buste légèrement incliné, mains en appui sur les cuisses. Après une expiration totale (vider tout l'air), je rentre le ventre et le remonte vers le sternum sans reprendre d'air (aspiration viscérale). Je maintiens le blocage tant que c'est confortable avant de relâcher et inspirer."
        },
        feelings: {
            physique: "Une sensation très étrange 'd'aspiration' à l'intérieur du ventre, comme si mes organes remontaient sous mes côtes. C'est très différent du gainage classique: ici, on ne contracte pas les abdos vers l'extérieur, on les plaque contre la colonne.",
            respiration: "L'étape la plus dure. Au début, j'avais un réflexe de panique (envie d'inspirer) dès que je vidais mes poumons. Il a fallu lutter contre ce réflexe pour tenir l'apnée à vide quelques secondes.",
            mental: "Cet exercice m'a demandé une confiance totale en mon corps. Il faut oser rester 'sans air' et écouter ses sensations internes (intestins/viscères) plutôt que sa peur mentale. Une fois réussi, cela procure un sentiment de puissance et de maîtrise de soi."
        },
        analysis: {
            quoi: "Cet exercice masse les organes internes et stimule la digestion et l'immunité. J'ai appris la technique du 'Jalandhara bandha' (menton vers le sternum) pour verrouiller l'énergie.",
            satisfaction: "Très satisfaisante. C'est un mouvement impressionnant visuellement et techniquement exigeant.",
            progression: "Tenir la rétention (poumons vides) plus longtemps sans crispation, et réussir à le faire le dos plus droit.",
            utility: "C'est l'exercice roi pour renforcer le muscle transverse (ventre plat). Utile pour protéger mes lombaires lors des squats lourds ou soulevés de terre en musculation, et pour améliorer ma digestion."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    8: {
        date: "20 Novembre 2025",
        method: "Hatha Yoga",
        exercise: "Jambe en extension sur le dos (Supta Padangusthasana)",
        image: "/8.webp",
        learned: {
            text: "Posture d'étirement de la chaîne postérieure exécutée allongé sur le dos. Une jambe reste ancrée au sol, l'autre est levée vers le ciel à l'aide d'une sangle passée sous le pied. J'ai pratiqué l'extension verticale (pour les ischios) et l'ouverture sur le côté (pour les adducteurs), en veillant à garder les deux fesses au sol."
        },
        feelings: {
            physique: "L'étirement dans les ischio-jambiers et le mollet était intense mais contrôlé. Lors de l'ouverture sur le côté, c'était un vrai défi de ne pas décoller la fesse opposée (crête iliaque) du sol.",
            respiration: "Respiration fluide et apaisée. Le fait d'être allongé aide à bien respirer avec le ventre. J'ai utilisé l'expiration pour gagner quelques millimètres d'amplitude.",
            mental: "J'ai dû visualiser ma rotule pour bien l'aligner (ne pas la laisser tourner vers l'intérieur). C'était un travail de patience : accepter ma raideur actuelle sans m'énerver."
        },
        analysis: {
            quoi: "J'ai appris que cet exercice favorise le retour veineux et la récupération musculaire après une séance de sport (jambes lourdes).",
            satisfaction: "Très utile. Je sens que cela soulage instantanément mes tensions dans le bas du dos après mes squats.",
            progression: "Réussir à tendre complètement la jambe sans trembler, et descendre plus bas sur le côté sans que mon bassin ne bascule.",
            utility: "Indispensable pour contrebalancer la raideur induite par la musculation et la course à pied (sports à mouvements répétitifs). C'est un excellent outil de prévention contre les claquages."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    9: {
        date: "27 Novembre 2025",
        method: "Hatha Yoga",
        exercise: "Le Guerrier I (Virabhadrasana I)",
        image: "/9.webp",
        learned: {
            text: "Posture debout vigoureuse. Jambes écartées, je pivote le torse et la jambe avant de 90 degrés. Je plie le genou avant à angle droit (le genou doit être au-dessus de la cheville) tout en gardant la jambe arrière tendue et le talon au sol. Les bras sont levés vers le ciel, parallèles entre eux"
        },
        feelings: {
            physique: "J'ai bien senti le travail des cuisses (quadriceps) que je connais en fitness, mais la difficulté était de garder le talon arrière au sol tout en tournant les hanches vers l'avant. J'ai senti un étirement intense dans le mollet arrière et l'aine. Mes épaules chauffaient à force de garder les bras en extension vers le ciel.",
            respiration: "L'extension des bras ouvre la poitrine et augmente la capacité pulmonaire. J'ai essayé de respirer calmement malgré l'effort intense des jambes.",
            mental: "Une posture qui donne un sentiment de puissance et de détermination (d'où le nom 'Guerrier'). Je devais être très concentré pour ne pas laisser mon poids s'effondrer sur mon genou avant."
        },
        analysis: {
            quoi: "Cette posture renforce le dos et tonifie les abdominaux. Elle est bénéfique pour soulager les maux de dos et la sciatique. J'ai appris l'importance d'ajuster mes omoplates en les rentrant pour ne pas crisper le cou.",
            satisfaction: "Satisfaisante. C'est un exercice physique qui demande de la force, ce qui me correspond bien, tout en travaillant la souplesse des hanches.",
            progression: "Réussir à descendre la cuisse avant parallèle au sol sans décoller le talon arrière, et réussir à tourner mon buste complètement face à la jambe avant (rotation de la taille).",
            utility: "Excellent pour le renforcement des jambes sans matériel. Utile pour étirer les fléchisseurs de hanche (psoas) souvent raides à cause de la position assise ou de la musculation."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    10: {
        date: "4 Décembre 2025",
        method: "Hatha Yoga",
        exercise: "Étirement latéral intense (Parsvakonasana)",
        image: "/10.webp",
        learned: {
            text: "Posture debout asymétrique. À partir d'une fente latérale (jambe avant pliée à 90°, cuisse parallèle au sol), je pose la main du même côté au sol, à l'extérieur du pied. L'autre bras est étiré dans le prolongement du corps, au-dessus de l'oreille, pour former une ligne droite diagonale continue du talon arrière jusqu'au bout des doigts."
        },
        feelings: {
            physique: "J'ai senti un étirement 'intense' (comme le nom l'indique) sur tout le flanc ouvert, des côtes jusqu'à la hanche. La difficulté majeure était de poser la main à plat au sol sans remonter les fesses. J'ai bien senti l'appui sur le bord externe du pied arrière (4e et 5e orteils) pour stabiliser la posture.",
            respiration: "La compression du côté plié rend la respiration plus difficile. J'ai dû visualiser que je respirais uniquement avec le poumon du côté ouvert (celui vers le plafond) pour trouver de l'amplitude.",
            mental: "La posture demande une attention divisée : garder le genou avant plié (force) tout en étirant le bras opposé (souplesse). J'ai dû faire attention à ne pas crisper ma nuque en regardant vers le haut (si c'était trop dur, je regardais devant moi comme suggéré dans les précautions)."
        },
        analysis: {
            quoi: "Que cet exercice ne travaille pas seulement les jambes, mais tonifie aussi les organes abdominaux (digestion) et le cœur. J'ai appris à créer une ligne d'énergie ininterrompue.",
            satisfaction: "C'est une posture esthétique et athlétique. Je suis satisfait de sentir que ma souplesse de hanche s'améliore, me permettant de descendre plus bas qu'au début du semestre.",
            progression: "Réussir à poser la paume de la main entièrement à plat au sol (pour l'instant je suis souvent sur le bout des doigts) tout en gardant la poitrine ouverte vers le ciel.",
            utility: "Très utile pour débloquer la cage thoracique et augmenter ma capacité pulmonaire pour le cardio. La mobilité latérale est aussi excellente pour les changements de direction dans les sports collectifs."
        }
    },
    // Exemple vide pour le jour 2 (à dupliquer pour les autres)
    11: {
        date: "11 Décembre 2025",
        method: "Hatha Yoga / Vinyasa",
        exercise: "Guerrier II : Variations flexion avant / arrière",
        image: "/11.webp",
        learned: {
            text: "À partir de la posture de base du Guerrier II (fente large, bras à l'horizontale), j'ai pratiqué une alternance de mouvements du buste sans bouger les jambes :"
        },
        feelings: {
            physique: "Une brûlure intense dans la cuisse avant (quadriceps) car elle reste contractée en isométrie tout le long de l'exercice. En revanche, le mouvement du haut du corps m'a procuré une sensation agréable d'étirement des côtes et des obliques, moins 'figée' que les postures précédentes.",
            respiration: "J'ai dû synchroniser le souffle sur le mouvement (Inspirer en arrière / Expirer en avant). C'était comme une pompe dynamique pour mes poumons.",
            mental: "Sensation de 'danser' la posture. Cela demande une concentration différente : il faut dissocier le bas du corps (qui est l'ancrage, immobile) du haut du corps (qui est mobile et fluide)."
        },
        analysis: {
            quoi: "J'ai appris qu'on peut être stable et mobile en même temps. C'est une introduction au 'Vinyasa' (mouvement synchronisé au souffle).",
            satisfaction: "Très plaisant. Je me sens moins 'raide' et légèrement plus gracieux que dans les postures statiques pures.",
            progression: "Réussir à ne pas tendre la jambe avant quand je pars en arrière (réflexe de facilité) et garder le genou plié à 90° tout du long.",
            utility: "Excellent pour la mobilité du tronc indispensable dans les sports de rotation (tennis, golf, sports de combat) et pour le gainage dynamique"
        }
    },
};