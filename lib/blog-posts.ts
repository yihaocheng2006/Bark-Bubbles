/**
 * Blog content source.
 *
 * To publish a new post (including automated/AI-generated ones), add a new
 * object to the `blogPosts` array below matching the `BlogPost` type. Each
 * post's `slug` becomes its URL at /blog/[slug], and pages are statically
 * generated from this array (see app/blog/page.tsx and
 * app/blog/[slug]/page.tsx) — no other wiring is required.
 *
 * `content` is a simple block list rather than raw HTML/Markdown so posts
 * can be generated as structured data (e.g. by a script or LLM) without
 * needing a markdown parser dependency.
 */

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-09-20" */
  date: string;
  author: string;
  /** The author's role/title, shown under their name. Optional. */
  authorRole?: string;
  /** Path to the author's photo in /public. Falls back to initials if omitted. */
  authorPhoto?: string;
  /** Path to an image in /public */
  coverImage: string;
  coverImageAlt: string;
  tags: string[];
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-dog-needs-grooming",
    title: "7 Signs Your Dog Is Overdue for a Grooming Session",
    excerpt:
      "Matted fur and long nails are the obvious ones — here are the less obvious signs that it's time to book a grooming appointment, plus how often you should really be booking.",
    date: "2026-09-01",
    author: "Jamie Rivera",
    authorRole: "Founder & Master Groomer",
    authorPhoto: "/jamie-rivera.jpg",
    coverImage: "/facilities3.webp",
    coverImageAlt: "A freshly groomed poodle sitting on the grooming table",
    tags: ["Grooming Tips"],
    content: [
      {
        type: "paragraph",
        text: "Most owners know to book a groom when their dog's coat looks visibly shaggy or unkempt. But by the time a coat looks bad enough to notice at a glance, your dog has often already been dealing with the underlying discomfort for a while. Coats and nails don't go from fine to problematic overnight — the change is gradual, which is exactly why it's easy to miss until it's more work to fix. This guide walks through the subtle signs that are easy to overlook, why they matter more than they seem, and how to figure out the right grooming schedule for your particular dog.",
      },
      {
        type: "heading",
        text: "Why Grooming Frequency Matters",
      },
      {
        type: "paragraph",
        text: "A dog's coat, nails, ears, and skin are part of a connected system. Overgrown nails change how a dog's foot strikes the ground, which changes posture, which can eventually affect joints and gait. A matted coat traps moisture and debris against the skin, creating the exact warm, damp environment that bacteria and yeast thrive in. None of this happens on a fixed schedule — it depends on breed, coat type, activity level, and even the season. That's why \"signs to watch for\" is usually a more reliable guide than a strict calendar.",
      },
      {
        type: "heading",
        text: "7 Signs Your Dog Needs a Groom",
      },
      {
        type: "list",
        items: [
          "Nails click loudly on hard floors, or your dog seems to be shifting their weight off certain paws.",
          "Your dog is scratching, licking, or chewing at specific spots more than usual.",
          "There's a noticeable odor even a day or two after a bath at home.",
          "You can feel tangles or mats when petting your dog, especially behind the ears, under the legs, and around the collar area.",
          "Your dog's eyes are constantly obscured by fur, or tear staining is building up around the eyes or mouth.",
          "It's been more than 6–8 weeks since the last full groom (this varies quite a bit by breed and coat type — more on that below).",
          "Your dog seems less playful, more irritable, or more sensitive to being touched than usual — an uncomfortable coat or sore paws can genuinely affect mood.",
        ],
      },
      {
        type: "heading",
        text: "The Two Signs Owners Miss Most",
      },
      {
        type: "paragraph",
        text: "Of the seven above, nail length and hidden mats are the ones we catch owners missing most often. Nails are easy to underestimate because they grow slowly and gradually — most owners only notice when they're already long enough to click on hardwood. And mats love to hide in places you don't routinely touch: behind the ears, in the armpits, and around the base of the tail. A coat can look perfectly smooth on top while hiding a mat close to the skin underneath.",
      },
      {
        type: "quote",
        text: "A coat that's overdue for grooming isn't just about appearances — it can genuinely affect your dog's comfort, mobility, and skin health.",
      },
      {
        type: "heading",
        text: "Why Waiting Can Make Things Worse",
      },
      {
        type: "paragraph",
        text: "Mats pull on the skin every time your dog moves, and they trap moisture underneath, which can lead to irritation or infection if left unchecked. Severe matting sometimes leaves groomers no choice but to shave the affected area short for your dog's comfort and safety — something that's almost always avoidable with more regular visits. Overgrown nails, meanwhile, don't just click loudly; over months they can change how a dog stands and walks, putting uneven pressure on joints. Catching these signs early keeps every grooming visit quick, gentle, and low-stress — for your dog and for your wallet, since prevention is almost always cheaper and faster than correction.",
      },
      {
        type: "heading",
        text: "How Often Should You Really Book?",
      },
      {
        type: "paragraph",
        text: "\"Every 6–8 weeks\" is a reasonable default, but coat type changes the answer quite a bit:",
      },
      {
        type: "list",
        items: [
          "Short, smooth coats (Beagles, Labs, Boxers): every 8–12 weeks — these coats shed naturally and need the least frequent professional grooming.",
          "Double coats (Golden Retrievers, Huskies, Corgis): every 6–8 weeks, with extra attention during spring and fall shedding seasons.",
          "Curly or wavy coats (Poodles, Doodles, Bichons): every 4–6 weeks — these coats don't shed the way others do, so loose hair stays trapped and mats form faster.",
          "Long, silky coats (Shih Tzus, Yorkies, Maltese): every 4–6 weeks, plus regular brushing at home in between to prevent tangles near the skin.",
        ],
      },
      {
        type: "heading",
        text: "What a Groom Actually Involves",
      },
      {
        type: "paragraph",
        text: "A standard groom here includes a bath with a coat-appropriate shampoo, a full blow-dry and brush-out, a nail trim, and ear cleaning — the essentials that keep a dog comfortable between visits. From there, most dogs also get a sanitary trim and a style or trim suited to their coat and the season. If you're ever unsure whether your dog needs a quick touch-up or a full service, that's a completely normal question to ask when you book — we're happy to take a quick look and recommend what actually makes sense.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Nail length and hidden mats near the skin are the two signs owners miss most often.",
          "Grooming frequency should follow coat type, not a one-size-fits-all calendar.",
          "Curly and long silky coats need the most frequent attention — every 4–6 weeks.",
          "Catching issues early keeps grooming quicker, gentler, and less expensive.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're not sure whether it's time, feel free to reach out — we're always happy to take a quick look and let you know what your pup actually needs.",
      },
    ],
  },
  {
    slug: "first-grooming-visit-guide",
    title: "Your Dog's First Grooming Visit: What to Expect",
    excerpt:
      "First time booking a groomer? Here's exactly what happens step by step, how to tell if a groomer is a good fit, and how to help your dog feel comfortable from drop-off to pickup.",
    date: "2026-09-08",
    author: "Sam Okafor",
    authorRole: "Senior Groomer",
    authorPhoto: "/sam.jpeg",
    coverImage: "/facilities1.jpeg",
    coverImageAlt: "A groomer carefully trimming a Shih Tzu in our studio",
    tags: ["New Owners", "Grooming Tips"],
    content: [
      {
        type: "paragraph",
        text: "Bringing your dog in for their first professional groom can feel like a big step — for them and for you. It's a new environment, new sounds, new smells, and a stranger handling parts of their body they might not be used to having touched. Knowing exactly what happens, in what order, and why makes the whole experience far less intimidating, and it's the single best thing you can do to prepare. This guide walks through the entire visit from drop-off to pickup, plus what separates a genuinely good groomer from a rushed one.",
      },
      {
        type: "heading",
        text: "Why the First Visit Sets the Tone",
      },
      {
        type: "paragraph",
        text: "Dogs are creatures of association. If the first grooming experience is calm and positive, most dogs settle into a lifelong routine without much fuss. If it's rushed or stressful, that first impression can make every future visit harder than it needs to be. That's why a good first visit is never just about getting the groom done — it's about building trust that pays off for years.",
      },
      {
        type: "heading",
        text: "Before the Appointment",
      },
      {
        type: "list",
        items: [
          "Let your dog relieve themselves shortly before arriving — a relaxed bladder means a more relaxed dog on the table.",
          "If your dog has a lot of pent-up energy, a short walk beforehand helps them settle in faster once they arrive.",
          "Bring any vaccination records if you haven't already shared them, especially for a first-time visit.",
          "Mention any sensitive areas, past injuries, medical conditions, or anxieties when you check in — this genuinely changes how your groomer approaches the visit.",
        ],
      },
      {
        type: "heading",
        text: "What Happens, Step by Step",
      },
      {
        type: "list",
        items: [
          "Check-in and a few minutes of settling time — letting your dog sniff around and adjust before any handling begins.",
          "A pre-groom check: a quick look at the coat, skin, ears, and nails to plan the visit and flag anything unusual.",
          "Bath and conditioning with a shampoo suited to their coat and skin.",
          "A full blow-dry paired with brushing, which is often the step that removes the most loose undercoat and prevents future mats.",
          "Any requested trim or style, done at a pace matched to how the dog is handling the visit.",
          "Nail trim and a check of the paw pads.",
          "Ear cleaning.",
          "A final once-over and a little fuss to send them home happy.",
        ],
      },
      {
        type: "paragraph",
        text: "For first-timers specifically, groomers go slower, take extra breaks, and lean on positive reinforcement throughout — the goal isn't just a finished groom, it's a dog who associates the whole process with calm, predictable handling rather than stress.",
      },
      {
        type: "quote",
        text: "The goal of a first visit isn't just a finished groom — it's a dog who leaves associating the whole experience with calm, predictable handling.",
      },
      {
        type: "heading",
        text: "How Long It Takes",
      },
      {
        type: "paragraph",
        text: "Small and medium dogs usually take about 30 minutes; large or heavily-coated dogs can take closer to an hour. First visits often run a bit longer than that baseline, simply because groomers are moving at the dog's pace rather than the clock's. If your dog needs extra time to settle in, that's a completely normal part of a first visit, not a sign anything is wrong.",
      },
      {
        type: "heading",
        text: "Signs Your Groomer Is a Good Fit",
      },
      {
        type: "list",
        items: [
          "They ask about your dog's temperament and history before the visit, not just their coat type.",
          "They explain what they're doing and why, rather than rushing straight to the table.",
          "They're willing to pause, offer breaks, or adjust their approach if your dog seems stressed.",
          "They give you honest, specific feedback afterward — not just \"all done,\" but what they noticed and what to expect next time.",
        ],
      },
      {
        type: "heading",
        text: "After Pickup",
      },
      {
        type: "paragraph",
        text: "Some dogs are a little tired after their first groom — that's completely normal, even for dogs who handled it well. New sensations, a new environment, and a lot of standing still can be more draining than it looks. Offer water, a quiet spot to rest, and maybe a treat for being such a good sport. Most dogs settle into the rhythm of grooming within a visit or two, and it becomes just another normal part of their routine.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "A calm, positive first visit sets the tone for every future grooming appointment.",
          "First-timers get a slower pace, extra breaks, and more patience — expect the visit to run a little longer.",
          "A good groomer explains their process and adapts to your dog, rather than rushing through a checklist.",
          "It's normal for a dog to be a little tired afterward — most settle into the routine within a visit or two.",
        ],
      },
    ],
  },
  {
    slug: "brushing-guide-by-coat-type",
    title: "Brushing 101: The Right Tool for Your Dog's Coat",
    excerpt:
      "Slicker brush, undercoat rake, or bristle brush? A full guide to picking the right tool for your dog's coat type, a step-by-step routine, and the mistakes that cause the most mats.",
    date: "2026-09-15",
    author: "Priya Nair",
    authorRole: "Bath & Spa Specialist",
    authorPhoto: "/priya.webp",
    coverImage: "/facilities2.webp",
    coverImageAlt: "A happy Golden Retriever with its groomer",
    tags: ["At-Home Care"],
    content: [
      {
        type: "paragraph",
        text: "Regular brushing at home is one of the highest-impact, lowest-effort things you can do for your dog's coat. It keeps your dog healthier and more comfortable between grooming visits, prevents mats before they start, cuts down on shedding around the house, and gives you a regular, low-key chance to notice anything unusual on their skin. But the brush that works beautifully on a Labrador can be almost useless — or even irritating — on a Poodle. Getting the tool right matters more than most owners expect.",
      },
      {
        type: "heading",
        text: "Why Brushing Matters Beyond Looks",
      },
      {
        type: "paragraph",
        text: "Brushing does more than keep a coat tidy. It distributes natural skin oils along the hair shaft, which helps keep both coat and skin healthier. It improves circulation with the gentle stimulation of the brush against the skin. And because it means running your hands over your dog regularly, it's often how owners first notice a new lump, a hot spot, a tick, or a patch of irritated skin — long before it would otherwise be obvious. It's also, for a lot of dogs, genuinely enjoyable one-on-one time that builds trust.",
      },
      {
        type: "heading",
        text: "Match the Tool to the Coat",
      },
      {
        type: "list",
        items: [
          "Short, smooth coats (Beagles, Labs, Boxers): a rubber curry brush or bristle brush, used 1–2 times a week, is usually enough to lift loose hair and distribute oils.",
          "Double coats with a soft undercoat (Golden Retrievers, Huskies, Corgis): an undercoat rake is essential, especially during shedding season, to reach the dense layer beneath the guard hairs without damaging the topcoat.",
          "Curly or wavy coats (Poodles, Doodles, Bichons): a slicker brush used a few times a week prevents matting before it starts, followed by a metal comb to check you've reached all the way to the skin.",
          "Long, silky coats (Shih Tzus, Yorkies, Maltese): a pin brush for the length, plus a metal comb to check for tangles close to the skin where mats most often begin.",
        ],
      },
      {
        type: "heading",
        text: "A Step-by-Step Brushing Routine",
      },
      {
        type: "list",
        items: [
          "Start with a quick full-body scan, feeling for mats or tangles before you begin brushing so you know what to expect.",
          "Work in small sections — a few inches at a time — rather than dragging the brush across the whole coat in long strokes.",
          "Always brush in the direction of hair growth, then follow up against the grain lightly for double coats to lift loose undercoat.",
          "Finish with a metal comb through each section to confirm you've reached the skin, not just the top layer of fur.",
          "Reward with a treat or calm praise, especially early on — this turns brushing into something your dog looks forward to rather than tolerates.",
        ],
      },
      {
        type: "quote",
        text: "The dogs who tolerate brushing best are almost always the ones who started young, in short sessions, with plenty of positive reinforcement.",
      },
      {
        type: "heading",
        text: "Common Brushing Mistakes",
      },
      {
        type: "list",
        items: [
          "Brushing too fast across the surface without checking that the brush is actually reaching the undercoat or skin.",
          "Skipping the trouble spots — behind the ears, under the legs, and around the collar — where mats form first and fastest.",
          "Trying to detangle a completely dry, matted coat instead of using a detangling spray or conditioner to ease the process.",
          "Brushing only when a mat is already visible, rather than on a regular schedule that prevents them from forming.",
        ],
      },
      {
        type: "heading",
        text: "When to Call in the Professionals",
      },
      {
        type: "paragraph",
        text: "If mats have already formed, resist the urge to cut them out yourself close to the skin — dog skin is thinner and more fragile than it looks, and it's easy to nick your dog even with careful scissor work. Small, loose mats can often be worked out gently with a detangling spray and a lot of patience, but anything tight, close to the skin, or covering a large area is safer left to a professional groomer who has the right tools and technique to remove it without hurting your dog.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "The right brush depends entirely on coat type — one tool does not work for every dog.",
          "Brushing in small sections and finishing with a comb ensures you're actually reaching the skin.",
          "Mats form fastest behind the ears, under the legs, and around the collar — check these spots often.",
          "Bring your dog in rather than cutting out tight or extensive mats yourself.",
        ],
      },
      {
        type: "paragraph",
        text: "Not sure which tool is right for your dog's coat? Bring it up at your next visit — we're always happy to show you the basics in person.",
      },
    ],
  },
  {
    slug: "seasonal-coat-care-summer-winter",
    title: "Seasonal Coat Care: What Changes Between Summer and Winter",
    excerpt:
      "Your dog's coat works differently depending on the season, and the shave-in-summer instinct is usually the wrong move. Here's how to adjust grooming as the weather changes.",
    date: "2026-09-22",
    author: "Jamie Rivera",
    authorRole: "Founder & Master Groomer",
    authorPhoto: "/jamie-rivera.jpg",
    coverImage: "/4.jpg",
    coverImageAlt: "An apricot poodle standing on the grooming table",
    tags: ["Seasonal Care"],
    content: [
      {
        type: "paragraph",
        text: "A dog's coat isn't just for looks — it's a functioning part of their temperature regulation system, year-round. That means the right grooming routine genuinely changes with the seasons, and getting it wrong can leave your dog too hot in summer or under-insulated in winter. The most common mistake we see is well-intentioned but backwards: shaving a double-coated dog down for summer, which actually removes the insulation that helps keep them cool.",
      },
      {
        type: "heading",
        text: "How a Coat Regulates Temperature",
      },
      {
        type: "paragraph",
        text: "Many breeds have a double coat: a soft, insulating undercoat and a longer, coarser topcoat of guard hairs. In winter, this combination traps warm air close to the body. In summer, that same structure — when properly brushed out and maintained — creates a layer of airflow that actually helps regulate body heat and reflects direct sun off the skin. The system only works, though, if the undercoat isn't matted or overly thick, which is where seasonal brushing comes in.",
      },
      {
        type: "heading",
        text: "Warm Weather Coat Care",
      },
      {
        type: "list",
        items: [
          "Skip shaving double-coated breeds — their undercoat actually helps insulate against heat and protects skin from sunburn.",
          "Increase brushing frequency to clear loose undercoat and improve airflow to the skin underneath.",
          "Keep up with regular baths to manage shedding and prevent matting in humid weather, which speeds up tangling significantly.",
          "Watch for hot pavement on paw pads during walks — this is a heat-related issue separate from coat care, but just as seasonal.",
        ],
      },
      {
        type: "heading",
        text: "The Shaving Myth",
      },
      {
        type: "paragraph",
        text: "It's an understandable instinct — a thick coat looks hot, so shaving it off seems like relief. But for most double-coated breeds, the undercoat is doing more cooling work than removing it would achieve. Shaving also removes the coat's natural sun protection, leaving skin exposed to sunburn, and the coat can sometimes grow back unevenly or with a different texture afterward. The better move for genuinely double-coated dogs is a thorough de-shedding treatment and consistent brushing, not a shave-down.",
      },
      {
        type: "quote",
        text: "For most double-coated breeds, a proper de-shed and brush-out does more for summer comfort than a shave ever will.",
      },
      {
        type: "heading",
        text: "Cold Weather Coat Care",
      },
      {
        type: "list",
        items: [
          "Avoid close shaves in the weeks before winter — dogs need coat length for warmth once temperatures drop.",
          "Dry your dog fully after baths before they go back outside; a damp coat in cold air is uncomfortable and can chill a dog quickly.",
          "Check paw pads more often for cracking, or irritation from salt and ice on winter walks.",
          "Moisturizing paw balms can help with dry, cracked pads that are more common in cold, dry air.",
        ],
      },
      {
        type: "heading",
        text: "Transition Seasons: Shedding Season Survival",
      },
      {
        type: "paragraph",
        text: "Spring and fall are when double-coated dogs \"blow\" their coat — shedding a large volume of undercoat over a few weeks as they transition between summer and winter coats. This is the single most important time to increase brushing frequency, even for dogs who don't need much attention the rest of the year. A thorough de-shedding treatment during these windows removes loose undercoat before it mats, and makes a noticeable difference in the amount of hair you're otherwise vacuuming off the couch.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Double coats regulate temperature in both directions — resist the urge to shave for summer.",
          "Increase brushing in summer to keep the undercoat from trapping heat and moisture.",
          "Keep coat length up in winter, and always dry fully before outdoor time.",
          "Shedding season (spring and fall) is the highest-priority window for de-shedding treatments.",
        ],
      },
      {
        type: "paragraph",
        text: "Not sure what your dog's coat needs this time of year? Ask us at your next visit — we're happy to walk you through a seasonal plan suited to your dog's specific breed and coat.",
      },
    ],
  },
  {
    slug: "puppys-first-year-grooming-timeline",
    title: "Puppy's First Year: A Grooming Timeline",
    excerpt:
      "From first at-home handling to a full grooming routine — a month-by-month guide to introducing a new puppy to grooming, so it becomes routine, not scary.",
    date: "2026-09-25",
    author: "Sam Okafor",
    authorRole: "Senior Groomer",
    authorPhoto: "/sam.jpeg",
    coverImage: "/groomers3.jpg",
    coverImageAlt: "A dog being gently bathed",
    tags: ["New Owners"],
    content: [
      {
        type: "paragraph",
        text: "How and when you introduce grooming makes a bigger difference than almost anything else in how your dog feels about it for the rest of their life. Puppies who have calm, positive early experiences with handling tend to grow into dogs who genuinely don't mind — sometimes even enjoy — grooming visits. Puppies who are rushed into a full groom too early, or handled roughly before they're ready, can carry that anxiety for years. Here's a general timeline that works well for most puppies; always check with your vet for guidance specific to your puppy's breed and health.",
      },
      {
        type: "heading",
        text: "Why Early, Positive Experiences Matter",
      },
      {
        type: "paragraph",
        text: "Puppies go through a key socialization window in their first few months where new experiences — sounds, textures, handling, strangers — are far more likely to be accepted calmly than the same experiences introduced later in life. Grooming involves a lot of things puppies aren't naturally used to: the sound of clippers and dryers, having paws and ears handled, standing still on a table. Introducing these gradually, during that early window, is what makes the difference between a dog who tolerates grooming and one who's genuinely relaxed about it.",
      },
      {
        type: "heading",
        text: "8–12 Weeks: Handling at Home",
      },
      {
        type: "paragraph",
        text: "This stage isn't about grooming at all — it's about touch. Get your puppy comfortable with having their paws, ears, mouth, and tail handled briefly and gently, rewarding calm behavior with treats or praise. Keep sessions short, just a few seconds at a time, several times a day. This is also a good window to introduce the sound of a hair dryer at a distance and low setting, so it's not a completely new sound later on.",
      },
      {
        type: "heading",
        text: "12–16 Weeks: First Short Visit",
      },
      {
        type: "paragraph",
        text: "Once most of the early vaccination series is underway, a short, low-pressure grooming visit — focused on getting comfortable with the environment rather than a full service — is a great next step. This might just mean a bath, a light brush-out, and a nail trim, done slowly with plenty of breaks. The goal at this stage is exposure, not results.",
      },
      {
        type: "heading",
        text: "4–6 Months: First Full Groom",
      },
      {
        type: "paragraph",
        text: "Once vaccinations are complete, most puppies are ready for their first full groom: a bath, full brush-out, nail trim, ear cleaning, and an age-appropriate trim if their coat type calls for one. By this point, the earlier handling and short visits usually pay off — puppies who've had that groundwork tend to settle in noticeably faster than ones going through all of it for the first time at once.",
      },
      {
        type: "heading",
        text: "6+ Months: Settling Into a Routine",
      },
      {
        type: "paragraph",
        text: "From here, it's about settling into a regular grooming schedule based on breed and coat type — typically every 4–8 weeks, following the same guidelines as an adult dog of that coat type. Consistency matters: dogs who see the same groomer on a predictable schedule tend to stay the most relaxed about the whole process long-term.",
      },
      {
        type: "quote",
        text: "Puppies who've had calm, gradual handling early on tend to become the adult dogs who barely notice grooming day at all.",
      },
      {
        type: "heading",
        text: "Setting Your Puppy Up for Success",
      },
      {
        type: "paragraph",
        text: "Short, positive experiences early on matter far more than a perfect-looking coat in these first months. A few things make a real difference:",
      },
      {
        type: "list",
        items: [
          "Keep early sessions short — a few minutes is plenty at first, even if the groom isn't fully finished.",
          "Bring a favorite treat and let your groomer use it throughout the visit, not just at the end.",
          "Stick to a consistent groomer where possible — puppies build trust faster with a familiar face and handling style.",
          "Don't skip the \"boring\" early handling at home — it's doing more work than it looks like.",
        ],
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "The first few months are a key window for building positive associations with handling and grooming.",
          "A short, low-pressure visit around 12–16 weeks is more valuable than jumping straight to a full groom.",
          "First full grooms usually happen around 4–6 months, once vaccinations are complete.",
          "A puppy who learns that grooming is calm and predictable becomes a much easier adult dog to groom for the next 10+ years.",
        ],
      },
    ],
  },
  {
    slug: "preventing-ear-infections-in-dogs",
    title: "Ear Infections in Dogs: Prevention Tips From Our Groomers",
    excerpt:
      "Floppy-eared and water-loving breeds are especially prone to ear infections. Here's what causes them, who's most at risk, and how routine care helps prevent them.",
    date: "2026-09-28",
    author: "Priya Nair",
    authorRole: "Bath & Spa Specialist",
    authorPhoto: "/priya.webp",
    coverImage: "/pet-grooming.jpg",
    coverImageAlt: "A groomer trimming a Pomeranian's nails",
    tags: ["Health & Wellness"],
    content: [
      {
        type: "paragraph",
        text: "Ear infections are one of the most common reasons dogs end up at the vet — and one of the most preventable with a bit of routine care. Left unaddressed, they can be genuinely painful and, if they become chronic, difficult to fully resolve. The good news is that prevention is straightforward once you understand what's actually causing the problem in the first place.",
      },
      {
        type: "heading",
        text: "What Causes Ear Infections",
      },
      {
        type: "paragraph",
        text: "A dog's ear canal is naturally warm and, to some degree, moist — exactly the environment that yeast and bacteria thrive in when given the chance to build up. Floppy ears reduce airflow and trap moisture against the canal, which is why breeds like Cocker Spaniels, Basset Hounds, and Labradors are more prone to issues than dogs with upright ears. Excess hair growing inside the ear canal, common in breeds like Poodles and Schnauzers, can trap debris and moisture even further. And any dog that swims or gets their ears wet regularly is at higher risk simply from the added moisture.",
      },
      {
        type: "heading",
        text: "Breeds and Dogs at Higher Risk",
      },
      {
        type: "list",
        items: [
          "Floppy-eared breeds: Cocker Spaniels, Basset Hounds, Labradors, and Golden Retrievers, due to reduced airflow to the ear canal.",
          "Breeds with hair growth inside the ear canal: Poodles, Schnauzers, and many terrier breeds.",
          "Dogs who swim or bathe frequently, where moisture regularly gets into the ear canal.",
          "Dogs with known allergies, since skin inflammation from allergies often extends into the ears.",
        ],
      },
      {
        type: "heading",
        text: "How to Help Prevent Them",
      },
      {
        type: "list",
        items: [
          "Dry your dog's ears thoroughly after baths and swimming — a soft towel or cotton ball at the outer ear is usually enough.",
          "Ask your groomer about routine ear cleaning as part of regular grooming visits.",
          "Watch for head shaking, scratching at the ears, odor, redness, or a head tilt — and don't wait to get it checked if you notice any of these.",
          "Avoid cotton swabs deep in the ear canal; stick to what's visible at the outer ear, or let a professional handle the rest.",
          "Keep excess ear hair trimmed or plucked in breeds prone to it, which improves airflow significantly.",
        ],
      },
      {
        type: "quote",
        text: "Most ear infections we see could have been caught — or avoided entirely — with a few extra minutes of drying after a bath or a swim.",
      },
      {
        type: "heading",
        text: "What Routine Ear Care Looks Like at a Grooming Visit",
      },
      {
        type: "paragraph",
        text: "Ear cleaning is included with every grooming appointment here, so regular visits do double duty for coat care and prevention. A typical ear check includes a visual inspection for redness, odor, or discharge, a gentle cleaning of the visible ear canal with a dog-safe solution, and trimming of excess hair if your dog's breed calls for it. If anything looks off, we'll flag it so you can follow up with your vet before it becomes a bigger issue.",
      },
      {
        type: "heading",
        text: "When to See a Vet, Not Just a Groomer",
      },
      {
        type: "paragraph",
        text: "Routine ear cleaning during grooming is preventive care, not treatment. If your dog is already showing signs of an active infection, a vet visit — not a grooming appointment — is the right next step.",
      },
      {
        type: "list",
        items: [
          "A strong or unusual odor coming from the ear.",
          "Redness, swelling, or visible discharge inside the ear.",
          "Frequent head shaking, tilting, or pawing at one ear specifically.",
          "Signs of pain when the ear area is touched.",
        ],
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Warm, moist ear canals are the main reason infections develop — drying thoroughly after water exposure matters a lot.",
          "Floppy-eared, hairy-eared, and frequently-swimming dogs are all at higher risk.",
          "Routine grooming visits include ear cleaning, which doubles as prevention.",
          "Odor, redness, discharge, or head shaking are signs to see a vet, not just a groomer.",
        ],
      },
    ],
  },
  {
    slug: "bath-time-basics-how-to-bathe-your-dog",
    title: "Bath Time Basics: How to Properly Bathe Your Dog at Home",
    excerpt:
      "Bathing seems simple, but the step most owners rush — rinsing — is the one that causes the most skin irritation. A full step-by-step guide to doing it right.",
    date: "2026-10-02",
    author: "Sam Okafor",
    authorRole: "Senior Groomer",
    authorPhoto: "/sam.jpeg",
    coverImage: "/dogrinse.jpg",
    coverImageAlt: "A groomer rinsing a Golden Retriever with a handheld sprayer",
    tags: ["At-Home Care"],
    content: [
      {
        type: "paragraph",
        text: "Bathing a dog looks simple enough: wet, lather, rinse, dry. But the technique behind each of those steps matters more than most owners realize, and the step people rush most — rinsing — is the one most likely to cause problems afterward. Done well, a bath leaves your dog's skin and coat genuinely healthier. Done poorly, it can leave behind residue that causes the exact itching and irritation a bath was supposed to prevent.",
      },
      {
        type: "heading",
        text: "Why Bathing Technique Matters",
      },
      {
        type: "paragraph",
        text: "A dog's skin has a different pH balance and oil composition than human skin, and both the products you use and the way you use them affect how well that balance is maintained. Water that's too hot can dry out skin. Shampoo that isn't fully rinsed leaves a residue that attracts dirt and can irritate sensitive skin. Even the order of steps — brushing before wetting, for example — changes how effective the bath actually is at cleaning down to the skin rather than just the surface of the coat.",
      },
      {
        type: "heading",
        text: "How Often Should You Bathe Your Dog?",
      },
      {
        type: "list",
        items: [
          "Most dogs do well with a bath every 4–6 weeks — frequent enough to manage odor and shedding, infrequent enough to avoid drying out the skin.",
          "Dogs with oilier skin or skin conditions may need more frequent bathing — ask your vet or groomer for a specific recommendation.",
          "Very active dogs who swim or get muddy often may need more frequent baths, but should use a gentle shampoo to avoid over-drying skin.",
          "Puppies should be bathed less often than adults, using a tear-free, puppy-safe shampoo, until their skin barrier is fully developed.",
        ],
      },
      {
        type: "heading",
        text: "Step-by-Step: A Proper At-Home Bath",
      },
      {
        type: "list",
        items: [
          "Brush thoroughly before wetting your dog — water tightens mats and makes them much harder to remove afterward.",
          "Use lukewarm water, tested on your wrist the way you would for a baby — too hot dries out skin, too cold is simply unpleasant.",
          "Wet the coat fully down to the skin, not just the surface, before applying any shampoo.",
          "Apply shampoo starting at the neck and working back, keeping well away from the eyes, ears, and nose.",
          "Rinse thoroughly — far more thoroughly than feels necessary — until the water runs completely clear with no slip or suds left in the coat.",
          "Apply conditioner if your dog's coat type benefits from it, then rinse again just as thoroughly.",
          "Towel off excess water, then fully dry with a dryer on a dog-safe setting, brushing as you go to prevent the coat from drying into tangles.",
        ],
      },
      {
        type: "quote",
        text: "If you think you've rinsed enough, rinse for another thirty seconds — leftover shampoo residue is the single biggest cause of post-bath itching we see.",
      },
      {
        type: "heading",
        text: "Water Temperature and Rinsing: The Detail Most Owners Skip",
      },
      {
        type: "paragraph",
        text: "Shampoo residue left in the coat doesn't just look fine and disappear — it dries onto the skin and can cause flaking, itching, and irritation that owners often mistake for a completely separate skin problem. This is especially true for dogs with dense or double coats, where it's easy to feel like the surface is rinsed while product is still sitting close to the skin underneath. When in doubt, keep rinsing. There's very little risk in over-rinsing and a real cost to under-rinsing.",
      },
      {
        type: "heading",
        text: "Common At-Home Bathing Mistakes",
      },
      {
        type: "list",
        items: [
          "Skipping the pre-bath brush-out, which lets mats tighten and makes the eventual brush-out afterward much harder.",
          "Using human shampoo, which is formulated for a different skin pH and can dry out a dog's skin over time.",
          "Rushing the rinse, leaving residue that causes itching days later, long after the bath itself is forgotten as the cause.",
          "Letting a double-coated dog air dry, which often leaves the undercoat damp and can lead to a musty smell or matting.",
        ],
      },
      {
        type: "heading",
        text: "When to Leave It to the Professionals",
      },
      {
        type: "paragraph",
        text: "A basic at-home bath is a great routine between grooming visits, but there are times it's worth leaving to a professional groomer: dogs with skin conditions that need a medicated shampoo applied a specific way, heavily matted coats where bathing without proper prep can make mats worse, and anxious or large dogs who are difficult to safely handle solo in a home tub. A full professional groom also includes the brush-out, nail trim, and ear cleaning that a home bath alone doesn't cover.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Brush before you bathe — water tightens mats and makes them harder to remove.",
          "Rinsing thoroughly matters more than most owners expect — residue is the top cause of post-bath itching.",
          "Every 4–6 weeks is a reasonable default bathing frequency for most adult dogs.",
          "Skip human shampoo — it's formulated for a different skin pH than dogs have.",
        ],
      },
    ],
  },
  {
    slug: "inside-the-grooming-kit-tools-we-use",
    title: "Inside the Grooming Kit: The Tools We Use and Why",
    excerpt:
      "Straight shears, thinning shears, slicker brushes, undercoat rakes — a look at the actual tools behind a professional groom, and which ones are safe to use at home.",
    date: "2026-10-05",
    author: "Jamie Rivera",
    authorRole: "Founder & Master Groomer",
    authorPhoto: "/jamie-rivera.jpg",
    coverImage: "/groomtools.avif",
    coverImageAlt: "A groomer holding a comb and scissors beside a Bernese Mountain Dog",
    tags: ["Grooming Tips"],
    content: [
      {
        type: "paragraph",
        text: "Owners often ask why a professional groom looks and feels so different from a careful at-home trim — and a lot of the answer comes down to the tools. Professional-grade equipment isn't just sharper or fancier; it's built for precision, safety, and control in ways that make a real difference for a dog standing on a table having their coat handled by a stranger. Here's a look at what's actually in a groomer's kit, and why each piece exists.",
      },
      {
        type: "heading",
        text: "Why Professional Tools Make a Difference",
      },
      {
        type: "paragraph",
        text: "The core difference is precision. Professional shears hold an edge longer and cut more cleanly than general-purpose scissors, which means less tugging on the coat and a cleaner line. Purpose-built brushes are shaped and spaced to reach specific coat layers without scratching skin. And tools like nail grinders give far more control than clippers alone, reducing the risk of cutting the quick. None of this is about needing to look impressive — every tool exists to make the process faster, cleaner, and more comfortable for the dog.",
      },
      {
        type: "heading",
        text: "The Core Toolkit",
      },
      {
        type: "list",
        items: [
          "Straight shears — for clean, precise cutting along the body and legs.",
          "Thinning shears — notched blades that blend and soften lines rather than cutting straight across, used for natural-looking finishes.",
          "Slicker brush — fine, closely-spaced wire bristles for smoothing the coat and lifting loose hair.",
          "Undercoat rake — longer, wider-set teeth designed to reach through the topcoat into the dense undercoat without damaging guard hairs.",
          "Clippers with guard combs — for even-length trims and breed-standard cuts, with interchangeable guards for different lengths.",
          "Nail clippers and a nail grinder — used together or separately depending on the dog and the condition of the nails.",
          "Ear cleaning solution and cotton — for gentle, routine ear care as part of every groom.",
          "Detangling spray — used before brushing out mats to reduce pulling and discomfort.",
        ],
      },
      {
        type: "heading",
        text: "Shears vs. Clippers: When We Use Each",
      },
      {
        type: "paragraph",
        text: "Clippers are efficient for even, consistent lengths across larger areas — think a Poodle's body clip or a Golden's sanitary trim. Shears come in for anywhere precision matters more than speed: shaping around the face and paws, blending lines between lengths, and finishing touches that clippers alone can't achieve. Most grooms use both, moving between them depending on the area and the look being created.",
      },
      {
        type: "quote",
        text: "Good tools don't make a groomer — but the right tool for the right job is what keeps a groom quick, precise, and comfortable for the dog.",
      },
      {
        type: "heading",
        text: "Nail Care Tools: Clippers vs. Grinders",
      },
      {
        type: "paragraph",
        text: "Clippers give a quick, clean cut but leave a sharper edge and carry a slightly higher risk of cutting into the quick if a dog moves unexpectedly. A grinder removes small amounts of nail gradually, which allows for more control — especially useful for dark nails where the quick isn't visible — and leaves a smoothly rounded edge. Many groomers use clippers for the bulk of the length and a grinder to finish and smooth, getting the speed of one and the precision of the other.",
      },
      {
        type: "heading",
        text: "What's Safe to Keep at Home",
      },
      {
        type: "paragraph",
        text: "Not every tool in a professional kit needs a spot in your bathroom cabinet, but a few are genuinely useful for owners to have on hand between visits:",
      },
      {
        type: "list",
        items: [
          "A slicker brush and metal comb, for regular at-home brushing between grooms.",
          "A detangling spray, for easing out small tangles before they become mats.",
          "Nail clippers, if you're comfortable trimming just the very tip — when in doubt, leave nail trims to a professional.",
        ],
      },
      {
        type: "paragraph",
        text: "Shears — especially thinning shears — and clippers with guard combs are best left to professionals. They require training to use safely close to skin, and a small mistake can be uncomfortable or even injure your dog. If you're ever unsure whether something is safe to try at home, ask your groomer — we're always happy to point you toward the right at-home tools for your dog specifically.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Professional tools are built for precision and control, not just speed or appearance.",
          "Shears and clippers each have a role — most grooms use both depending on the area.",
          "A grinder offers more control than clippers alone for nail trims, especially on dark nails.",
          "Brushes, combs, and detangling spray are the tools most worth keeping at home; leave shears and clippers to the professionals.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-dog-shampoo",
    title: "Choosing the Right Shampoo for Your Dog's Skin and Coat",
    excerpt:
      "Human shampoo, medicated shampoo, oatmeal, hypoallergenic — here's how to actually choose, and why what's in your own shower is off-limits for your dog.",
    date: "2026-10-08",
    author: "Priya Nair",
    authorRole: "Bath & Spa Specialist",
    authorPhoto: "/priya.webp",
    coverImage: "/bubblebath.jpeg",
    coverImageAlt: "A Golden Retriever with shampoo bubbles on its head during a bath",
    tags: ["Health & Wellness", "At-Home Care"],
    content: [
      {
        type: "paragraph",
        text: "Walk down the pet aisle and you'll find a wall of dog shampoo options — oatmeal, medicated, hypoallergenic, puppy-safe, flea and tick — and it's genuinely hard to know which one your dog actually needs. The good news is that once you understand what each type is actually formulated for, the choice becomes a lot simpler. The bad news, for anyone tempted to grab whatever's already in the shower: human shampoo is not a safe substitute, no matter how gentle the bottle claims to be.",
      },
      {
        type: "heading",
        text: "Why Human Shampoo Is Off-Limits",
      },
      {
        type: "paragraph",
        text: "Human skin sits at a more acidic pH, typically around 5.5, while dog skin runs closer to neutral, generally in the 6.2–7.4 range depending on the individual. Human shampoo is formulated for our skin's specific balance, and using it on a dog disrupts their skin's natural protective barrier, which can lead to dryness, irritation, and a coat that's more prone to future problems. Even shampoos marketed as \"gentle\" or \"natural\" for humans aren't formulated with a dog's skin chemistry in mind — the safest choice is always a shampoo made specifically for dogs.",
      },
      {
        type: "heading",
        text: "Common Dog Shampoo Types",
      },
      {
        type: "list",
        items: [
          "Oatmeal or soothing shampoo — formulated to calm mild itchiness and dry skin, a solid general-purpose choice for sensitive but otherwise healthy skin.",
          "Medicated shampoo — prescribed or recommended by a vet for specific skin conditions like hot spots, fungal issues, or allergic dermatitis; not meant for routine, non-medical use.",
          "Hypoallergenic, fragrance-free shampoo — designed to minimize the chance of reaction for dogs with sensitivities or allergies.",
          "Puppy-safe, tear-free shampoo — gentler formulation appropriate for a puppy's still-developing skin barrier.",
          "Flea and tick shampoo — treats an active infestation, but shouldn't be your only line of defense (more on this below).",
        ],
      },
      {
        type: "heading",
        text: "Matching Shampoo to Skin and Coat Needs",
      },
      {
        type: "paragraph",
        text: "If your dog has no particular skin issues, a gentle, general-purpose dog shampoo — often an oatmeal-based formula — is a safe default. Dogs with visible dryness, flaking, or mild itching often do better with a soothing or hypoallergenic formula. Anything beyond mild, everyday sensitivity — persistent itching, redness, hot spots, or a strong odor that doesn't resolve with a normal bath — is worth a vet visit before reaching for a medicated shampoo on your own, since the wrong product for the underlying cause can sometimes make things worse.",
      },
      {
        type: "quote",
        text: "The right shampoo depends on what's actually going on with your dog's skin — not just what smells nice on the shelf.",
      },
      {
        type: "heading",
        text: "How Often Is Too Often?",
      },
      {
        type: "paragraph",
        text: "Even the right shampoo, used too often, can strip natural oils and leave skin drier than it started. For most dogs, every 4–6 weeks is a reasonable baseline, with adjustments for activity level, coat type, and skin sensitivity. Dogs with oilier coats or skin conditions may need a different schedule entirely — that's a conversation worth having with your vet or groomer rather than guessing.",
      },
      {
        type: "heading",
        text: "A Note on Flea & Tick Shampoos",
      },
      {
        type: "paragraph",
        text: "Flea and tick shampoos can be effective for treating an active, visible infestation, but they typically only kill pests present at the time of the bath and offer little to no lasting prevention afterward. They also tend to contain stronger active ingredients than everyday shampoos, which isn't ideal for frequent use or sensitive skin. For ongoing prevention, a vet-recommended flea and tick preventative — combined with your normal grooming routine — is generally a more reliable and gentler long-term approach than relying on shampoo alone.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Never use human shampoo on a dog — the pH difference can damage their skin's natural protective barrier.",
          "Match the shampoo to your dog's actual skin needs, not just what's marketed as gentle.",
          "Persistent skin issues are a vet conversation, not a shampoo-aisle decision.",
          "Flea and tick shampoo treats what's already there — pair it with a vet-recommended preventative for ongoing protection.",
        ],
      },
      {
        type: "paragraph",
        text: "Not sure what's right for your dog's coat and skin? Ask us at your next visit — we're happy to recommend a shampoo suited to your dog specifically.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
