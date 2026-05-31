import type { ReadingPassage } from './readingPassages';

/**
 * English-language reading passages, used when the learner is in
 * "learn-english" mode (UI in French, content in English).
 *
 * All texts are original, written for language-learning purposes and
 * graded to CEFR levels A1–C2. Literature passages are original
 * descriptive/analytical texts about authors and their work, not
 * reproductions of copyrighted material.
 */
export const readingPassagesEN: ReadingPassage[] = [
    /* ─────────────────────────── A1 ─────────────────────────── */
    {
        moduleId: 'a1en-first-day',
        title: 'First Day at School',
        source: 'Original text — Level A1',
        paragraphs: [
            'My name is Tom. Today is my first day at school. I am seven years old. I am nervous. There are many children in the classroom. My teacher is very nice. Her name is Miss Green.',
            'We sit at our desks. Miss Green says: "Hello, everyone! My name is Miss Green. Welcome to class." We learn the alphabet and some numbers. I like it very much. School is fun.',
            'At lunchtime, I eat a sandwich. I sit with a boy called Sam. Sam is friendly. He says: "Do you like football?" I say: "Yes, I do!" We are friends now.',
        ],
    },
    {
        moduleId: 'a1en-my-city',
        title: 'My City',
        source: 'Original text — Level A1',
        paragraphs: [
            'My name is Lucy. I live in a city called Greenford. It is not a big city, but I love it. There is a park near my house. The park has many trees and a small lake. People walk their dogs there every day.',
            'In the city centre, there are lots of shops, a market and a cinema. There is also a train station. Many people travel to the big city for work. The buses run every fifteen minutes.',
            'The people in Greenford are very friendly. My neighbours say hello in the street. On Saturdays, we go to the market. We buy fresh bread, fruit and vegetables. I think Greenford is a great place to live.',
        ],
    },
    /* ─────────────────────────── A2 ─────────────────────────── */
    {
        moduleId: 'a2en-weekend-trip',
        title: 'A Weekend in London',
        source: 'Original text — Level A2',
        paragraphs: [
            'Last weekend, my friend Clara and I travelled to London by train. It was Clara\'s first time in the city, so I wanted to show her all the famous sights. We left early on Saturday morning and arrived at St Pancras station just after nine o\'clock.',
            'Our first stop was the Tower of London. We queued for about twenty minutes, but it was worth it — the Crown Jewels were spectacular. Afterwards, we walked across Tower Bridge and took lots of photos. By lunchtime, we were hungry, so we found a little café near the South Bank and had fish and chips.',
            'In the afternoon, we visited the Tate Modern art gallery. I have always loved modern art, but Clara was not so sure at first. By the end, though, she said it was one of the most interesting places she had ever been. We ended the day with a boat trip along the Thames and watched the sun set behind the London Eye.',
            'On Sunday morning, we explored Borough Market before catching our train home. Clara bought some cheese and a jar of local honey. "I have to come back," she said on the way home. I completely agreed.',
        ],
    },
    {
        moduleId: 'a2en-job-interview',
        title: 'Sophie\'s Job Interview',
        source: 'Original text — Level A2',
        paragraphs: [
            'Sophie had been looking for a new job for two months when she finally got a call from a marketing company in Bristol. They invited her for an interview the following Thursday. She felt excited but also very nervous.',
            'The night before the interview, Sophie prepared carefully. She read everything about the company, chose her best suit and practised answering common interview questions in front of the mirror. She went to bed early so she would feel rested in the morning.',
            'On the day of the interview, Sophie arrived ten minutes early. The office was modern and bright. The manager, a friendly woman called Ms Park, asked her about her experience and her strengths. Sophie spoke clearly and gave good examples. She also asked a few questions about the team.',
            'Two days later, Ms Park called Sophie to offer her the job. Sophie said yes immediately. She started the following Monday. It was a new beginning, and she felt ready for the challenge.',
        ],
    },
    /* ─────────────────────────── B1 ─────────────────────────── */
    {
        moduleId: 'b1en-social-media',
        title: 'Social Media and Young People',
        source: 'Original article — Level B1',
        paragraphs: [
            'Social media platforms such as Instagram, TikTok and Snapchat are used by billions of people around the world, and young people make up a significant share of these users. For many teenagers, these apps are a normal part of daily life — a way to stay in touch with friends, discover new music and express themselves creatively.',
            'However, concerns about the effects of social media on young people\'s mental health have grown in recent years. Several studies suggest a link between heavy social media use and increased levels of anxiety and low self-esteem, particularly among teenage girls. The constant pressure to post perfect photos and gain likes can make young people feel that their real lives do not measure up.',
            'On the positive side, social media can also be a powerful tool for connection and learning. Young people who feel isolated in their local communities can find supportive groups online. Activists have used these platforms to raise awareness about important issues such as climate change and social justice. Many young content creators have even turned their online presence into a career.',
            'The key question is not whether social media is good or bad, but how it is used. Experts recommend setting time limits, following accounts that make you feel good, and taking regular breaks from screens. Parents and schools also have a role to play in helping young people develop healthy digital habits.',
        ],
    },
    {
        moduleId: 'b1en-green-city',
        title: 'Building a Greener City',
        source: 'Original article — Level B1',
        paragraphs: [
            'As cities around the world continue to grow, urban leaders are under increasing pressure to reduce carbon emissions and improve the quality of life for residents. Many are turning to green initiatives — projects designed to make cities cleaner, healthier and more sustainable for future generations.',
            'One of the most successful approaches has been investing in public transport. Cities that have expanded their metro systems or introduced electric bus networks have seen significant reductions in traffic and air pollution. Copenhagen, for example, has built an impressive cycle lane network that allows a large proportion of residents to travel by bike every day, even in winter.',
            'Green spaces are another priority. Research shows that access to parks and gardens reduces stress, encourages physical activity and supports urban biodiversity. Some cities have gone further, planting trees on rooftops and along motorways to absorb carbon dioxide and lower temperatures during heatwaves.',
            'Renewable energy is also transforming city infrastructure. Solar panels are now installed on schools, sports centres and public buildings in many European cities. Some neighbourhoods have even become energy-neutral, producing as much electricity as they consume. These examples show that sustainable urban development is not just possible — it is already happening.',
        ],
    },
    /* ─────────────────────────── B2 ─────────────────────────── */
    {
        moduleId: 'b2en-digital-education',
        title: 'Education in the Digital Age',
        source: 'Original article — Level B2',
        paragraphs: [
            'Technology has fundamentally altered the landscape of education over the past two decades. From interactive whiteboards in primary schools to AI-powered tutoring platforms at university level, the tools available to teachers and learners have never been more varied or more powerful. Advocates argue that this digital transformation is democratising access to knowledge; critics warn that it risks undermining the very qualities that make education meaningful.',
            'The COVID-19 pandemic served as an involuntary global experiment in remote learning. Schools and universities were forced to migrate online almost overnight, exposing both the possibilities and the limitations of digital education. On the one hand, platforms such as Zoom and Google Classroom allowed lessons to continue across borders; on the other, significant inequalities emerged between students who had reliable internet access and those who did not.',
            'Artificial intelligence is now adding another dimension to this debate. Personalised learning software can adapt to each student\'s pace and identify gaps in understanding with remarkable precision. Some institutions have begun using AI to provide round-the-clock tutoring support, raising questions about the future role of human teachers. Will the teacher of tomorrow be primarily a facilitator, guiding students through a landscape of digital resources, rather than a direct transmitter of knowledge?',
            'There are legitimate concerns on the other side of this argument. Research consistently shows that social interaction, debate and the mentorship of experienced educators play a crucial role in cognitive and emotional development. A screen, however sophisticated, cannot replicate the nuanced feedback of a skilled teacher, nor the serendipitous moment when a student\'s curiosity is ignited by an unexpected classroom discussion.',
            'The most persuasive vision of education in the digital age is not a binary choice between screens and chalkboards, but a thoughtful integration of both. Technology should enhance human teaching, not replace it. Achieving that balance will require not just investment in devices and infrastructure, but sustained reflection on what education is ultimately for.',
        ],
    },
    {
        moduleId: 'b2en-cultural-identity',
        title: 'Cultural Identity in a Globalised World',
        source: 'Original article — Level B2',
        paragraphs: [
            'Globalisation has brought undeniable benefits: greater interconnectedness, the spread of ideas, and access to cultures and products from every corner of the world. Yet it has also triggered a profound and sometimes anxious conversation about cultural identity. As the world becomes more cosmopolitan, many communities are asking: what does it mean to belong somewhere, and what happens to that sense of belonging when the boundaries between cultures begin to dissolve?',
            'The concern is not new. Throughout history, dominant cultures have absorbed or displaced smaller ones. What is distinctive about the contemporary moment is the speed and scale of this process. A teenager in Lagos, Bogotá or Warsaw can consume the same music, films and fashion as their counterpart in New York or London. This cultural convergence creates a sense of shared global experience — but it can also make local traditions, languages and customs feel endangered.',
            'Yet the picture is more complex than a simple story of cultural homogenisation. Research in anthropology and sociology suggests that people rarely abandon their cultural heritage entirely in favour of a global identity. Instead, they engage in what scholars call "hybridisation" — blending influences from multiple sources to create something new and distinctly their own. The French chef who incorporates Japanese techniques, the Brazilian musician who fuses samba with electronic beats, or the second-generation immigrant who navigates fluidly between two worlds: these are not examples of cultural loss, but of cultural creativity.',
            'The greatest risk, perhaps, is not that cultures will disappear, but that only certain voices will be amplified by globalisation while others are systematically marginalised. When the majority of global media, technology platforms and economic power is concentrated in a handful of countries, the flow of cultural influence is rarely equal. Protecting cultural diversity therefore requires deliberate policies: supporting minority languages, funding local arts and media, and ensuring that the global digital space reflects the full breadth of human experience.',
            'In the end, cultural identity has always been dynamic rather than fixed. It is shaped by history, geography and contact with others. Embracing this fluidity, while remaining attentive to the power imbalances that shape it, may be the most honest and productive response to the challenge globalisation poses.',
        ],
    },

    /* ─────────────────────────── C1 ─────────────────────────── */
    {
        moduleId: 'c1en-europe',
        title: 'The Future of Europe',
        source: 'Original text — Level C1',
        paragraphs: [
            'Few political projects in modern history have been as ambitious — or as contested — as European integration. What began in the aftermath of the Second World War as a pragmatic effort to bind former enemies together through coal and steel has evolved into a union of twenty-seven nations sharing a parliament, a currency and, to a significant degree, a common destiny. Yet the question of where Europe is heading remains as open today as it has ever been.',
            'Supporters of deeper integration argue that only a united Europe can hope to exert real influence in a world increasingly shaped by the United States and China. On issues ranging from climate change to digital regulation, they contend, individual member states are simply too small to set the terms of global debate. A common foreign policy, a shared defence capability and a more coordinated economic strategy are, in this view, not luxuries but necessities.',
            'Critics, however, warn that the European project has too often advanced without the genuine consent of its citizens. The gap between the institutions in Brussels and the everyday concerns of ordinary people, they argue, has fuelled a sense of democratic deficit. The rise of populist and Eurosceptic movements across the continent reflects a deep unease about sovereignty, identity and accountability that cannot be dismissed as mere prejudice.',
            'The truth, as so often, lies somewhere between these positions. Europe\'s strength has always rested on its capacity to reconcile competing interests through patient negotiation rather than force. Whether it can continue to do so — balancing solidarity with diversity, ambition with consent — will determine not only its own future but, in no small measure, the shape of the wider international order.',
        ],
    },
    {
        moduleId: 'c1en-freedom',
        title: 'On Freedom',
        source: 'Original text — Level C1',
        paragraphs: [
            'Of all the concepts that animate political philosophy, none is invoked more frequently, or understood more variously, than freedom. We speak of freedom of speech and freedom from fear, of free markets and free will, often without pausing to ask whether these usages share any common meaning. The word commands almost universal approval, yet the moment we attempt to define it precisely, the apparent consensus dissolves.',
            'A useful distinction, drawn by several thinkers, is that between negative and positive liberty. Negative liberty concerns the absence of external constraint: I am free to the extent that no one prevents me from acting as I choose. Positive liberty, by contrast, concerns the capacity for self-mastery: I am free to the extent that I am the author of my own life, governed by reason rather than by impulse or manipulation. Much political disagreement, on closer inspection, turns on which of these conceptions one takes to be fundamental.',
            'The tension between them is not merely academic. A society that prizes negative liberty above all may tolerate vast inequalities, on the grounds that no one is being actively coerced. A society devoted to positive liberty, on the other hand, may be tempted to interfere extensively in private life in the name of helping individuals become their "true" selves — a project that has, on more than one occasion in history, slid into tyranny.',
            'Perhaps the wisest response is to resist the temptation to choose definitively between them. Freedom worth having surely requires both the absence of arbitrary interference and the presence of real opportunities to act. To secure one without the other is to offer a hollow liberty: the freedom to starve, or the comfort of a gilded cage. The enduring task of any decent society is to hold these two demands in a difficult, productive balance.',
        ],
    },
    {
        moduleId: 'c1en-identity',
        title: 'The Question of Identity',
        source: 'Original text — Level C1',
        paragraphs: [
            'Who are we, and what makes us the same person over time? The question sounds almost childishly simple, yet it has occupied philosophers for centuries and resists any easy answer. The body that I inhabit today shares scarcely a single cell with the body I inhabited as an infant; my beliefs, tastes and memories have been transformed many times over. In what sense, then, am I the same individual who bore my name twenty years ago?',
            'One traditional response locates identity in memory. I am the same person as the child in the old photograph because I can, in principle, trace an unbroken chain of recollection back to him. Yet this answer quickly runs into difficulty. Our memories are notoriously unreliable, frequently revised and sometimes wholly invented. If identity depended on perfect recollection, the gradual forgetting that accompanies a long life would amount to a slow dissolution of the self.',
            'A more sophisticated view holds that personal identity is not a fixed essence to be discovered but a narrative to be constructed. On this account, we make ourselves coherent by telling stories about who we are — weaving our scattered experiences into a meaningful whole. Identity becomes less a matter of metaphysical fact than of ongoing interpretation, continually revised in the light of new circumstances.',
            'This narrative conception has obvious appeal in an age of social mobility and cultural mixture, when many people feel that they belong to several worlds at once. Yet it raises its own difficulties. If the self is merely a story, what prevents it from becoming a comfortable fiction, edited to flatter our vanity? The challenge, perhaps, is to author a life that is at once coherent and honest — a story we can believe without deceiving ourselves.',
        ],
    },
    {
        moduleId: 'c1en-healthcare',
        title: 'The Crisis of Rural Healthcare',
        source: 'Original report — Level C1',
        paragraphs: [
            'In towns and villages across the developed world, a quiet crisis is unfolding. Once-thriving rural communities are finding it increasingly difficult to attract and retain doctors, nurses and other medical professionals. The result is what experts have come to call "medical deserts" — regions where access to even basic healthcare has become a matter of long journeys, long waits, and mounting anxiety.',
            'The causes are complex and mutually reinforcing. Young doctors, burdened with debt and drawn by the professional opportunities of large hospitals, are reluctant to settle in remote areas. Those who do often find themselves overworked and isolated, covering vast territories with little support. As older practitioners retire, there are simply too few replacements willing to take their place. The vicious circle is hard to break.',
            'The consequences fall hardest on the most vulnerable. Elderly residents, who tend to have the greatest need for regular care, are frequently those least able to travel long distances to reach it. Chronic conditions go unmonitored; warning signs are missed; preventable illnesses become emergencies. In the most serious cases, the gap between a rural patient and timely treatment can prove fatal.',
            'Solutions exist, but none is a panacea. Telemedicine, which allows patients to consult specialists remotely, has shown genuine promise, though it cannot substitute for hands-on examination. Some governments have offered financial incentives to doctors willing to practise in underserved regions, with mixed results. Ultimately, reversing the decline of rural healthcare will require a sustained commitment — not merely to funding, but to a vision of society in which where one lives does not determine whether one lives.',
        ],
    },
    {
        moduleId: 'c1en-shakespeare',
        title: 'Shakespeare and the English Language',
        source: 'Original text — Level C1',
        paragraphs: [
            'It is difficult to overstate the influence of William Shakespeare on the English language. Writing at the turn of the seventeenth century, at a moment when English was still a relatively minor European tongue, he forged a body of work that would come to be regarded as one of the supreme achievements of world literature. More remarkably still, the language he used remains, four centuries later, intimately woven into everyday speech.',
            'Scholars estimate that Shakespeare introduced or popularised well over a thousand words that are now part of common usage. To "assassinate", to be "lonely", to feel "gloomy" or "bedazzled": these and countless other terms either first appear in his plays or owe their currency to him. Whole phrases that we now use without a second thought — "wild-goose chase", "in a pickle", "the be-all and end-all" — are his coinages, so thoroughly absorbed that we no longer recognise their origin.',
            'Yet his genius lay not merely in invention but in his unrivalled grasp of human character. The figures he created — the indecisive Hamlet, the ambitious Macbeth, the tragic Lear — possess a psychological depth that continues to feel startlingly modern. They are not types but individuals, racked by the same doubts, desires and contradictions that trouble us still. To read Shakespeare is, in a sense, to encounter ourselves.',
            'For the advanced learner of English, Shakespeare presents both a challenge and a reward. His syntax can be dense, his vocabulary archaic, his allusions obscure. But the effort required to read him is repaid many times over. To follow the music of his verse, and to feel the precise weight of his words, is to gain a deeper command of English than any grammar book could provide.',
        ],
    },
    {
        moduleId: 'c1en-orwell',
        title: 'Orwell and the Politics of Language',
        source: 'Original text — Level C1',
        paragraphs: [
            'George Orwell, the pen name of Eric Arthur Blair, occupies a singular place in twentieth-century letters. Best known for the dystopian novel "Nineteen Eighty-Four" and the political fable "Animal Farm", he was also one of the finest essayists in the English language — a writer whose clarity of prose was inseparable from his clarity of thought. For Orwell, the way we use language and the way we think were intimately, even dangerously, connected.',
            'His central conviction was that political corruption and linguistic corruption go hand in hand. When governments wish to defend the indefensible, he argued, they resort to euphemism and vague abstraction: villages are not destroyed but "pacified", populations are not expelled but subject to "transfer". By blurring the relationship between words and reality, such language makes atrocity easier to contemplate and harder to resist.',
            'In his celebrated essay "Politics and the English Language", Orwell offered a set of practical rules for honest writing: prefer the short word to the long, the concrete to the abstract, the active to the passive. These were not merely stylistic preferences but, in his view, moral imperatives. Sloppy language, he warned, makes it easier to have foolish thoughts; precise language is a defence against deception, both of others and of ourselves.',
            'It is a measure of Orwell\'s prescience that terms he invented or popularised — "Big Brother", "doublethink", "thoughtcrime", "Orwellian" itself — have entered the global vocabulary as shorthand for the abuses of authoritarian power. In an age of misinformation and political spin, his insistence that we attend carefully to the words we use feels less like a period piece than an urgent and contemporary warning.',
        ],
    },
    {
        moduleId: 'c1en-austen',
        title: 'Jane Austen and the Art of Irony',
        source: 'Original text — Level C1',
        paragraphs: [
            'When Jane Austen published her novels in the early nineteenth century, she did so anonymously, her work attributed simply to "a Lady". She could hardly have imagined that two centuries later her six completed novels would be read, adapted and beloved across the world, or that her name would become a byword for a particular kind of wit — sharp, observant and quietly devastating.',
            'Austen\'s great subject was the narrow world she knew: the drawing rooms and country estates of the English gentry, the delicate negotiations of courtship and marriage. Critics have sometimes dismissed this as a limited canvas. Yet within these apparently modest confines, she achieved a precision of social observation that few writers have matched. The manoeuvres of her characters for status, security and affection reveal, in miniature, the universal comedy of human vanity and self-deception.',
            'Her chief instrument was irony. Few sentences in English are more famous than the opening of "Pride and Prejudice", which announces, with mock solemnity, a truth "universally acknowledged" that is no truth at all but a piece of social prejudice. Throughout her work, Austen invites the reader to see what her characters cannot — to smile at their blindness while recognising, uncomfortably, our own.',
            'What elevates Austen above mere social satire, however, is her moral seriousness. Beneath the comedy lies a steady concern with how one ought to live: with the difference between charm and worth, between appearance and substance. Her heroines learn, painfully, to see clearly — to correct their first impressions and to know themselves. It is this combination of comic brilliance and ethical depth that secures her enduring appeal.',
        ],
    },
    {
        moduleId: 'c1en-dickens',
        title: 'Dickens and the Victorian City',
        source: 'Original text — Level C1',
        paragraphs: [
            'No writer is more closely associated with the great Victorian city than Charles Dickens. The London of his novels — fog-bound, teeming, by turns magnificent and monstrous — is among the most vivid settings in all of literature. Having known poverty and humiliation in his own childhood, when his father was imprisoned for debt and the young Charles was sent to labour in a factory, Dickens wrote about the urban poor with an intimacy and indignation that few of his contemporaries could match.',
            'His novels appeared in monthly instalments, a form that shaped both their construction and their reception. Readers across the social spectrum waited eagerly for each new chapter, and Dickens, ever attentive to his audience, adjusted his plots in response to their reactions. This serial publication encouraged the cliffhangers, the broad humour and the unforgettable minor characters that are hallmarks of his style.',
            'Yet Dickens was far more than a popular entertainer. His fiction mounted a sustained assault on the cruelties and hypocrisies of his age: the brutal workhouses, the corrupt courts, the indifference of the comfortable to the suffering of the poor. In novels such as "Oliver Twist", "Bleak House" and "Hard Times", he gave faces and voices to those whom Victorian society preferred to ignore, and in doing so helped to shift the conscience of a nation.',
            'For all his sentimentality, which modern readers sometimes find excessive, Dickens possessed an extraordinary energy and inventiveness. His prose teems with life; his characters, however exaggerated, are unforgettable. To read him is to be plunged into a world at once recognisable and heightened — a world in which the comic and the tragic, the grotesque and the tender, jostle together on every crowded page.',
        ],
    },
    {
        moduleId: 'c1en-privacy',
        title: 'The Right to Be Forgotten',
        source: 'Original press article — Level C1',
        paragraphs: [
            'In the age of the internet, information is rarely lost. A youthful indiscretion, a long-settled legal dispute, an embarrassing photograph: all may linger indefinitely in the results of a search engine, accessible to any prospective employer, partner or acquaintance who cares to look. In response to this new permanence, European law has recognised a controversial principle: the so-called "right to be forgotten".',
            'The principle holds that individuals may, in certain circumstances, request the removal of links to information about them that is inaccurate, outdated or no longer relevant. A landmark ruling by the European Court of Justice in 2014 established that search engines could be required to delist such results, on the grounds that the public interest in access to information must be weighed against the individual\'s right to privacy.',
            'Defenders of the right argue that it restores a measure of dignity to ordinary people in the face of an unforgiving digital memory. Without some mechanism for forgetting, they contend, we risk a society in which no one is ever permitted to move beyond their past mistakes — a permanent record that forecloses the possibility of redemption or reinvention. The capacity to start afresh, they insist, is fundamental to a humane social order.',
            'Critics counter that the right poses a serious threat to freedom of information. Who is to decide what the public is entitled to know? The danger, they warn, is that the powerful and the unscrupulous will exploit the right to erase legitimate scrutiny of their conduct, rewriting the historical record to their advantage. The tension between privacy and transparency, between the right to forget and the right to know, is unlikely to be resolved soon — and the stakes, in a digital age, could hardly be higher.',
        ],
    },

    /* ─────────────────────────── C2 ─────────────────────────── */
    {
        moduleId: 'c2en-woolf',
        title: 'Virginia Woolf and the Stream of Consciousness',
        source: 'Original text — Level C2',
        paragraphs: [
            'Among the writers who transformed the English novel in the early twentieth century, Virginia Woolf stands as perhaps the most radical innovator. Dissatisfied with the conventions of realist fiction, which she regarded as preoccupied with external appearances at the expense of inner truth, she set out to capture something far more elusive: the texture of consciousness itself, the ceaseless flicker of impressions, memories and feelings that constitutes the lived experience of a mind.',
            'The technique with which she is most often associated — the so-called "stream of consciousness" — sought to render thought not as orderly sequence but as fluid, associative movement. In novels such as "Mrs Dalloway" and "To the Lighthouse", the narrative drifts seamlessly between characters and across time, following the currents of memory and perception. A single day, even a single moment, can open outward into a whole life, as the present summons the past and the trivial discloses the profound.',
            'This was not mere technical experiment for its own sake. Woolf believed that conventional narrative falsified human experience, imposing a false tidiness on the genuine disorder of consciousness. Life, she famously wrote, is not a series of gig-lamps symmetrically arranged but "a luminous halo, a semi-transparent envelope". The task of the modern novelist, as she conceived it, was to convey this luminous, shifting quality — to record the atoms as they fall upon the mind.',
            'Woolf\'s achievement extended well beyond fiction. In essays of dazzling lucidity, above all "A Room of One\'s Own", she examined the material and social conditions that had, for centuries, silenced the creative voices of women. Her insistence that artistic freedom depends upon economic independence and intellectual space remains one of the foundational arguments of modern feminist thought, no less resonant now than when she first advanced it.',
        ],
    },
    {
        moduleId: 'c2en-eliot',
        title: 'Modernist Poetry and the Fragmented World',
        source: 'Original text — Level C2',
        paragraphs: [
            'The poetry that emerged in the aftermath of the First World War bore the unmistakable mark of a civilisation in crisis. The confident certainties of the nineteenth century had been shattered on the battlefields of Europe, and poets responded by abandoning the smooth forms and consoling sentiments of their predecessors. In their place they offered fragmentation, allusion and difficulty — a poetry that mirrored, in its very structure, the dislocation of the age.',
            'The most influential figure in this transformation was T. S. Eliot, an American who settled in England and became, paradoxically, the dominant voice of English poetic modernism. His long poem "The Waste Land", published in 1922, is often regarded as the defining work of the movement. Assembled from a bewildering array of voices, languages and literary echoes, it presents a vision of a spiritually barren world, fragmented and adrift, in which the great traditions of the past survive only as broken shards.',
            'To the first readers, such poetry seemed wilfully obscure, even chaotic. Yet the difficulty was deliberate and meaningful. Eliot and his contemporaries held that a complex and disordered civilisation demanded a correspondingly complex and disordered art. The reader was no longer to be lulled by melody but provoked into active interpretation, made to labour at the construction of meaning from the fragments laid before them.',
            'Whatever one makes of its difficulty, modernist poetry permanently altered the expectations we bring to verse. It severed the assumed bond between poetry and pleasant musicality, insisting that the form could accommodate the harsh, the discordant and the unresolved. In doing so it expanded the territory of the art, and bequeathed to later poets a freedom — and a burden — with which they are still reckoning.',
        ],
    },
    {
        moduleId: 'c2en-bronte',
        title: 'The Brontës and the Romantic Imagination',
        source: 'Original text — Level C2',
        paragraphs: [
            'From a remote parsonage on the Yorkshire moors, three sisters produced, within the space of a few extraordinary years, a body of work that would unsettle and enthral the Victorian reading public. Charlotte, Emily and Anne Brontë wrote at first under masculine pseudonyms, partly to evade the prejudice against women authors and partly, perhaps, to give themselves licence to explore passions that polite society preferred to leave unspoken.',
            'Emily\'s sole novel, "Wuthering Heights", remains the most startling of their achievements. Its story of obsessive, destructive love, set against the wild and indifferent landscape of the moors, baffled and disturbed its first reviewers, who found in it a savagery quite at odds with the gentle domestic fiction of the period. Time has vindicated Emily\'s vision: the novel is now recognised as a work of singular power, its structural complexity and emotional intensity unmatched in the literature of its century.',
            'Charlotte\'s "Jane Eyre", by contrast, gave the English novel one of its first truly interior heroines — a plain, poor, fiercely independent woman who insists upon her own moral worth in defiance of every social expectation. The novel\'s famous declaration of equality between souls, regardless of rank or wealth, struck a chord that still reverberates, and helped to establish a tradition of fiction centred on the inner life of the unremarkable individual.',
            'What unites the sisters\' work is the force of the Romantic imagination, channelled through disciplined craft. They wrote of feeling raised to the pitch of the sublime, of nature as a mirror of the soul, of the individual will pitted against the constraints of circumstance. That such intensity should have issued from three women living in obscurity and dying young only deepens the strange and enduring fascination of their story.',
        ],
    },
    {
        moduleId: 'c2en-wollstonecraft',
        title: 'Wollstonecraft and the Rights of Woman',
        source: 'Original text — Level C2',
        paragraphs: [
            'Long before the organised campaigns for women\'s suffrage, a lone and formidable voice articulated, with unprecedented force, the case for the equality of the sexes. Mary Wollstonecraft, writing at the close of the eighteenth century amid the upheavals of the French Revolution, produced in "A Vindication of the Rights of Woman" a work whose arguments retain a startling relevance more than two centuries later.',
            'Her central contention was deceptively simple: that the apparent inferiority of women was not natural but manufactured. Denied education and confined to a sphere of triviality, women had been trained to be ornamental rather than rational, encouraged to cultivate charm at the expense of understanding. The defects for which they were then condemned were, Wollstonecraft argued, the predictable product of the very conditions imposed upon them — a self-fulfilling prophecy of subordination.',
            'The remedy she proposed was education: not the superficial accomplishments thought suitable for young ladies, but a rigorous training of the mind equal to that offered to men. Only when women were permitted to develop their reason, she insisted, could they become genuine moral agents, fit not merely to please their husbands but to fulfil their duties as citizens, mothers and rational beings. The cultivation of virtue, she maintained, was impossible without the cultivation of intellect.',
            'Wollstonecraft\'s argument was met, in her own time, with hostility and ridicule, and her unconventional private life was long used to discredit her ideas. Yet the essential justice of her case has proved impossible to dismiss. Nearly every subsequent movement for women\'s emancipation has drawn, knowingly or not, upon the principles she set out: that rights are grounded in our common rationality, and that no society can call itself just while it denies half its members the means to think for themselves.',
        ],
    },
    {
        moduleId: 'c2en-conrad',
        title: 'Conrad and the Heart of Darkness',
        source: 'Original text — Level C2',
        paragraphs: [
            'Joseph Conrad came to English as a third language, having grown up speaking Polish and French, and he did not begin to write in it seriously until well into adulthood. That a man so circumstanced should become one of the supreme prose stylists of the English novel is among the more remarkable facts in literary history — and a reminder that mastery of a language is not the exclusive birthright of those born to it.',
            'Drawing on his years as a sailor in the merchant marine, Conrad set much of his fiction at sea or in the remote outposts of empire, using these settings to probe the darker recesses of the human character. His most celebrated work, the novella "Heart of Darkness", follows a journey up an African river that is also, unmistakably, a journey into the moral abyss — an unflinching meditation on greed, cruelty and the thin veneer of what we call civilisation.',
            'Conrad\'s vision was profoundly sceptical, even bleak. He distrusted the grand ideals — progress, enlightenment, the civilising mission — in whose name so much violence was perpetrated, and he exposed the self-deception that allowed comfortable Europeans to avert their gaze from the brutality on which their prosperity rested. Yet his scepticism was never mere cynicism; it was rooted in a stern moral seriousness, a refusal to be consoled by comforting illusions.',
            'His legacy is complex and, in recent decades, hotly debated. Some readers have charged that, for all his critique of imperialism, his portrayal of Africa and its peoples remains caught within the prejudices of his era. The controversy is a serious one, and worth confronting honestly. Yet it has not diminished the disturbing power of his finest work, nor the influence of his exploration of moral ambiguity upon the literature that followed him.',
        ],
    },
    {
        moduleId: 'c2en-james',
        title: 'Henry James and the Inner Drama',
        source: 'Original text — Level C2',
        paragraphs: [
            'Henry James occupies a peculiar position in the history of the novel: an American who spent most of his life in Europe, a writer poised between two continents and two literary traditions, and an artist who pushed the novel of psychological analysis to a degree of refinement that has never been surpassed and seldom equalled. His subject was consciousness — the subtle, often unspoken dramas of perception, motive and moral choice.',
            'In novels such as "The Portrait of a Lady" and "The Ambassadors", little happens in the conventional sense. There are no battles, few deaths, scarcely any of the incident that propels more popular fiction. The action is internal: a slow dawning of awareness, a gradual revision of judgement, the painful recognition of a truth long resisted. James trained his enormous powers of observation upon the most delicate movements of the mind, finding high drama in a glance, a hesitation, an unfinished sentence.',
            'This concentration on inner life was matched by a prose of extraordinary intricacy. James\'s late style, with its long, qualified sentences, its parenthetical hesitations and its scrupulous reaching after precision, can demand great patience of the reader. Yet for those willing to attend to it, the reward is a fineness of discrimination, a sensitivity to nuance, that few other writers can offer. Every clause earns its place; nothing is careless.',
            'James\'s influence on the development of the modern novel can hardly be overstated. His insistence that fiction should dramatise consciousness rather than merely report events, his sophisticated handling of narrative point of view, his belief that the novel is a serious art form demanding the utmost craftsmanship — all of these helped to shape the writers who came after him. He stands, in many respects, at the threshold of literary modernism, pointing the way toward the experiments to come.',
        ],
    },
    {
        moduleId: 'c2en-joyce',
        title: 'Joyce and the Ordinary Made Strange',
        source: 'Original text — Level C2',
        paragraphs: [
            'James Joyce devoted his career to a paradoxical ambition: to make the most ordinary materials of life yield the richness usually reserved for myth and epic. A single day in the city of Dublin, the half-formed thoughts of unremarkable people, the texture of an unexceptional afternoon — these became, in his hands, the stuff of literature of the highest order. No writer has insisted more strenuously that the everyday is inexhaustibly significant.',
            'His early collection of stories, "Dubliners", appears at first deceptively plain. Its tales of clerks, shopkeepers and disappointed dreamers proceed with a quiet, almost clinical restraint. Yet each builds toward a moment of sudden illumination — what Joyce termed an "epiphany" — in which a character, or the reader, glimpses some truth ordinarily concealed beneath the surface of habit. The technique transformed the short story, demonstrating how much could be conveyed through implication and reticence.',
            'In his monumental novel "Ulysses", Joyce extended these methods to an astonishing scale. Mapping the wanderings of a single day onto the structure of an ancient epic, he deployed a dazzling variety of styles and an unprecedented frankness about the contents of the human mind. The book\'s difficulty, and its candour, provoked both prosecution and adulation; it remains a touchstone for debates about the limits and possibilities of the novel form.',
            'For all the formidable reputation of his later work, Joyce\'s essential preoccupation never changed: the conviction that the inner lives of ordinary men and women, fully attended to, contain depths as profound as any in literature. To read him with care is to learn a new attentiveness — to recognise, in the trivial round of one\'s own existence, the same buried significance that he laboured a lifetime to reveal.',
        ],
    },
    {
        moduleId: 'c2en-boredom',
        title: 'In Praise of Boredom',
        source: 'Original essay — Level C2',
        paragraphs: [
            'We live in an age that has all but abolished boredom, and we are, perhaps, the poorer for it. The slightest interval of unoccupied time — a queue, a delayed train, a quiet evening — is now instantly filled by the glowing rectangle in our pockets. The empty moment, once an unavoidable feature of human life, has become a problem to be solved, a void to be banished at the first opportunity. Yet in our eagerness to escape boredom, we may have lost something of value.',
            'For boredom, properly understood, is not merely the absence of stimulation but a peculiar and productive state of mind. It is in the unfilled hour that the imagination begins to stir, that half-formed ideas drift to the surface, that the mind, deprived of external entertainment, turns inward and discovers its own resources. Many of the great works of art and science have their origin not in frantic activity but in the apparently idle reverie that boredom makes possible.',
            'Psychologists have begun to confirm what writers and philosophers long suspected. The wandering, unfocused mind, far from being unproductive, is the engine of creativity and self-reflection. It is when we are doing nothing in particular that we consolidate memory, make unexpected connections, and arrive at insights that purposeful concentration would never yield. To be perpetually entertained is, in a sense, to be perpetually distracted from the deeper workings of one\'s own mind.',
            'None of this is to romanticise tedium, which in its more acute forms can be genuinely oppressive. The argument is rather for a recovered tolerance of empty time — a willingness to sit with our own thoughts rather than fleeing them at every opportunity. In an economy designed to capture our attention at every waking moment, the capacity to be bored, and to endure it, may turn out to be a small but significant act of self-possession.',
        ],
    },
    {
        moduleId: 'c2en-university',
        title: 'What Are Universities For?',
        source: 'Original academic text — Level C2',
        paragraphs: [
            'The question of what universities are for has rarely seemed more urgent, or more contested, than it does today. Once regarded as cloistered sanctuaries of disinterested learning, universities now find themselves pressed to justify their existence in the language of economic return — to demonstrate, in measurable terms, the value they add to graduates\' earnings and to national competitiveness. This shift in expectation deserves careful scrutiny, for it touches on the very purpose of higher education.',
            'There is, to be sure, a respectable case for the economic conception. Universities are expensive institutions, sustained in large part by public funds and private fees, and it is not unreasonable to ask what society receives in return. The training of skilled professionals, the generation of research that fuels innovation, the cultivation of a productive workforce: these are genuine public goods, and no honest defence of the university can afford to ignore them.',
            'Yet to reduce the university to an engine of economic growth is to mistake a part for the whole. The older ideal — that of education as an end in itself, a means of forming the mind and enlarging the sympathies — cannot be captured in any spreadsheet. The study of history, philosophy or literature may yield no obvious commercial dividend, yet it equips citizens to think critically, to weigh evidence, to resist manipulation, and to participate in democratic life. These are benefits no less real for being difficult to quantify.',
            'The deepest danger, perhaps, lies in allowing a single measure of value to crowd out all others. A society that asks of its universities only that they serve the economy will, in time, get the universities it deserves: efficient, perhaps, but spiritually impoverished, stripped of the very qualities that made them worth defending. The challenge for our age is to honour the practical contributions of higher learning without forgetting the more elusive, and more important, goods it exists to serve.',
        ],
    },
    {
        moduleId: 'c2en-editorial',
        title: 'How to Read an Editorial',
        source: 'Original text — Level C2',
        paragraphs: [
            'The editorial — that anonymous column in which a newspaper speaks in its own voice — is among the most distinctive and least understood forms of journalistic writing. Unlike the news report, which aspires, however imperfectly, to neutrality, the editorial is unashamedly an instrument of persuasion. To read it intelligently, one must learn to recognise the techniques by which it seeks to shape opinion, and to hold its arguments to account.',
            'The first thing the critical reader notices is the careful management of tone. A skilled editorialist adopts the register of calm, reasonable authority, presenting contestable judgements as though they were settled conclusions. Phrases such as "it is surely clear that" or "no reasonable person could deny" perform a quiet rhetorical work, inviting the reader\'s assent before any argument has been made. The appearance of moderation is itself a persuasive device.',
            'Equally important is what the editorial chooses to omit. Persuasion operates as much through silence as through statement: the inconvenient fact left unmentioned, the counter-argument briefly acknowledged only to be dismissed, the complexity flattened in the interest of a clean conclusion. The discerning reader learns to ask not only what is being said, but what is being left out, and whose interests the resulting picture happens to serve.',
            'None of this is to suggest that editorials should be distrusted on principle. At their best, they perform an indispensable function, distilling complex issues, holding power to account, and contributing to the public conversation that democratic life requires. The point is rather that they should be read as what they are: not neutral reports but reasoned advocacy, to be engaged with critically, weighed against other voices, and, where the evidence warrants, resisted.',
        ],
    },
    {
        moduleId: 'c2en-hardtimes',
        title: 'Dickens and the Critique of Utilitarianism',
        source: 'Original text — Level C2',
        paragraphs: [
            'Among the many targets of Charles Dickens\'s social criticism, few drew his fire more sharply than the cold philosophy of pure utility that gained ground in the industrial nineteenth century. In his novel "Hard Times", he mounted a sustained assault on a worldview that reduced human beings to units of production and measured every question by the narrow yardstick of fact and calculation, to the exclusion of imagination, feeling and wonder.',
            'The novel opens in a schoolroom presided over by a man who demands of his pupils nothing but "Facts" — a relentless drilling of statistics and definitions, the systematic suppression of fancy and play. In this regime, a child who loves horses is rebuked for failing to define one; the products of the imagination are dismissed as worthless idleness. Dickens presents this educational philosophy not as a harmless eccentricity but as a kind of spiritual mutilation, a deliberate starving of the soul.',
            'The consequences, as the novel unfolds, prove ruinous. The characters reared on this arid creed find themselves emotionally crippled, unable to love, to sympathise, or to find meaning in their own lives. The pursuit of efficiency and self-interest, divorced from any larger conception of human flourishing, yields not prosperity but desolation. The factory town in which the action unfolds, with its monotonous streets and poisoned air, becomes the physical emblem of a stunted civilisation.',
            'Dickens\'s critique was, in its way, prophetic. The reduction of human worth to economic productivity, the elevation of measurable quantity over immeasurable quality, the suspicion of anything that cannot be costed and counted — these tendencies, which he diagnosed with such vehemence, have hardly disappeared. "Hard Times" endures not only as a period piece but as a standing rebuke to any age, including our own, tempted to forget that human beings do not live by facts alone.',
        ],
    },
];
