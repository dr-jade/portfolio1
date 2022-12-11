<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Damrok Lee</title>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js" defer></script>
</head>
<body>
    <header>
        <img src="./img/logo.png" alt="Logo">
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#exp">Experience</a></li>
                <li><a href="#lang">Language/Education</a></li>
                <li><a href="#works"></a></li>
            </ul>
            <a href="mailto:dr.jadelee@gmail.com"></a>
        </nav>
    </header>
    <main>
        <section class="about">
            <img src="./img/logo.png" alt="logo">
            <blockquote>
                Damrok "Jade" Lee.
                Creativity is a part of my life.
            </blockquote>
            <p>
                I'm a Canada based web designer / front-end developer / amateur artist.
            </p>
            <p>
                One of my forte is I can be anything. I proven my adaptability by work for several different roles; which you can see it below.
            </p>
            <p>
                And I am also a passionate person who's keep moving forward to the goal.
            </p>
        </section>
        <section class="exp" id="exp">
            <h2>the jobs i worked for</h2>
            <article>
                <figure>
                    <img src="./img/fr.png" alt="fundraising">
                    <figcaption>
                        <h4>Fundraiser - Impact Walkers</h4>
                        <p>02.2020 - 06.2022</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/csr.png" alt="csr">
                    <figcaption>
                        <h4>CSR (Customer Service Representative) - NH Life</h4>
                        <p>12.2018 - 12.2019</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/is.png" alt="insurance">
                    <figcaption>
                        <h4>Insurance Planner - Shinhan Life</h4>
                        <p>01.2018 - 11.2018</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/mg.png" alt="management">
                    <figcaption>
                        <h4>Recruitment Manager - Coupang</h4>
                        <p>09.2015 - 12.2017</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/ph.png" alt="pharm co">
                    <figcaption>
                        <h4>Production Employee - Celltrion Pharm Inc.</h4>
                        <p>04.2013 - 06.2015</p>
                    </figcaption>
                </figure>
            </article>
        </section>
        <section class="lang" id="lang">
            <h2>education / language</h2>
            <article>
                <h3>education</h3>
                <ul>
                    <li>Currently enrolled in Web Development, Tamwood International College</li>
                    <li>Graduated high school by Qualification Exam</li>
                </ul>
            </article>
            <article>
                <h3>language</h3>
                <ul>
                    <li>english:</li>
                    <li><aside></aside><aside></aside></li>
                    <li>intermediate</li>
                </ul>
                <ul>
                    <li>korean:</li>
                    <li><aside></aside><aside></aside></li>
                    <li>native</li>
                </ul>
            </article>
        </section>
        <section class="works" id="works">
            <h2>works</h2>
            <article>
                <?php
                    $works = scandir('./img/works');
                    foreach($works as $idx => $img){
                        if($work == "." || $work == "..") continue;
                        $work = "./img/works/$work";
                        if($idx == 2){
                            echo "<img src='$work' alt='".$idx-2 ."'>";
                        }
                    }
                ?>
            </article>
        </section>
    </main>
    <footer>
        Copyright &copy; Jade Lee. All rights reserved.
    </footer>
</body>
</html>