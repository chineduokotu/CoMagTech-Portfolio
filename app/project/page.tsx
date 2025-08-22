import ProjectCard from "../component/projectcard";


const projects = [
{ title: "Brokers App", href: "/project/brooker website/broker.html", img: "/images/brokers.jpg" },
{ title: "Healthy Bite Website", href: "/project/Healthy Bite/index.html", img: "/images/Biryani.png" },
{ title: "Affiliate Template", href: "/project/affiliate.html", img: "/images/money.jpeg" },
{ title: "Engineering Quiz Game", href: "https://engineeringquiz.tiiny.site/", img: "/kin.jpg" },
{ title: "Analogue Clock", href: "/project/analogue clock project/clock.html", img: "/images/clock.jpg" },
{ title: "Countdown Clock", href: "/project/countdown clock/timer.html", img: "/images/countdown.jpg" },
{ title: "Language Translator", href: "/project/languagetranslator/index.html", img: "/images/translator.jpg" },
{ title: "Fabrication Website", href: "https://fssinstallation.com", img: "/images/fss.png" },
{ title: "Movie App", href: "/project/frontapp/ref.html", img: "/images/movie.jpg" },
{ title: "Todo App", href: "/project/todo/todo.html", img: "/todo.jpg" },
{ title: "Vacation App", href: "/project/vacation/vac.html", img: "/images/vacation.jpg" },
{ title: "Pet Shop Reviews", href: "/project/contentRotator/ContentRotaor.html", img: "/images/pet.jpg" },
];


export default function ProjectsPage() {
return (
<section className="mx-auto max-w-6xl px-8 py-24">
<h1 className="mb-8 text-4xl font-bold text-center">Projects</h1>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{projects.map((p) => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</section>
);
}