<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\PersonalInfo;
use App\Models\Service;
use App\Models\BlogPost;
use App\Models\Skill;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Testimonial;
use App\Models\SiteSetting;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        // ─── Projects ─────────────────────────────────────────
        $projects = [
            [
                'title' => 'Adidas',
                'slug' => 'adidas',
                'cover_image' => 'images/works/1.webp',
                'category' => 'E-COMMERCE WEBSITE',
                'year' => '2024',
                'project_type' => 'photo',
                'featured' => true,
                'overview' => 'A comprehensive e-commerce redesign project focusing on modern UI patterns and seamless checkout experience.',
                'objectives' => ['Modernize the overall design', 'Improve conversion rates', 'Enhance mobile experience'],
                'gallery' => [['imagePath' => 'images/works/1.webp', 'alt' => 'Adidas Homepage', 'caption' => 'Homepage Redesign']],
                'videos' => [],
                'testimonial' => ['quote' => 'The new design exceeded our expectations and boosted our online sales significantly.', 'name' => 'Marketing Team', 'role' => 'Adidas Digital'],
                'sort_order' => 1,
            ],
            [
                'title' => 'WWF',
                'slug' => 'wwf',
                'cover_image' => 'images/works/2.webp',
                'category' => 'CUSTOM WEBSITE DESIGN',
                'year' => '2023',
                'project_type' => 'photo',
                'featured' => true,
                'overview' => 'Custom website design for WWF focusing on environmental awareness and donation engagement.',
                'objectives' => ['Create engaging environmental storytelling', 'Boost donation conversions', 'Mobile-first design approach'],
                'gallery' => [['imagePath' => 'images/works/2.webp', 'alt' => 'WWF Website', 'caption' => 'Main Landing']],
                'videos' => [],
                'testimonial' => ['quote' => 'The website beautifully communicates our mission and has increased engagement.', 'name' => 'Communications Director', 'role' => 'WWF International'],
                'sort_order' => 2,
            ],
            [
                'title' => 'Honda',
                'slug' => 'honda',
                'cover_image' => 'images/works/3.webp',
                'category' => 'FRONT-END DEVELOPMENT',
                'year' => '2022',
                'project_type' => 'video',
                'featured' => true,
                'overview' => 'Front-end development project with interactive video showcases for Honda\'s new vehicle lineup.',
                'objectives' => ['Interactive 3D vehicle previews', 'Video-driven product stories', 'Performance optimization'],
                'gallery' => [],
                'videos' => [['title' => 'Honda Campaign Video', 'youtubeUrl' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'thumbnailPath' => 'images/works/3.webp', 'duration' => '2:30']],
                'testimonial' => ['quote' => 'The interactive experience brought our vehicles to life online.', 'name' => 'Digital Marketing Lead', 'role' => 'Honda Motors'],
                'sort_order' => 3,
            ],
            [
                'title' => 'Uniqlo',
                'slug' => 'uniqlo',
                'cover_image' => 'images/works/4.webp',
                'category' => 'Social Media Integration',
                'year' => '2021',
                'project_type' => 'mixed',
                'featured' => false,
                'overview' => 'Uniqlo is a well-established e-commerce retailer specializing in contemporary fashion. The brand has a significant presence on social media platforms.',
                'objectives' => ['Boost Website Traffic from Social Media', 'Enhance Customer Engagement and Interaction', 'Increase Customer Retention and Repeat Purchases', 'Strengthen Brand Loyalty and Advocacy', 'Improve SEO and Search Engine Rankings', 'Expand Brand Reach and Audience'],
                'gallery' => [
                    ['imagePath' => 'images/work-single/1.webp', 'alt' => 'Uniqlo Social Integration', 'caption' => 'Social Media Integration'],
                    ['imagePath' => 'images/work-single/2.webp', 'alt' => 'Uniqlo Campaign', 'caption' => 'Social Media Integration'],
                ],
                'videos' => [['title' => 'Uniqlo Social Campaign', 'youtubeUrl' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'thumbnailPath' => '', 'duration' => '1:45']],
                'testimonial' => ['quote' => 'Integrating social media into our website has been a game-changer for Uniqlo.', 'name' => 'Sarah Johnson', 'role' => 'Marketing Director, Uniqlo'],
                'sort_order' => 4,
            ],
            [
                'title' => 'Playstation',
                'slug' => 'playstation',
                'cover_image' => 'images/works/5.webp',
                'category' => 'Website Optimization',
                'year' => '2020',
                'project_type' => 'video',
                'featured' => false,
                'overview' => 'Performance optimization and video content integration for Playstation\'s gaming platform.',
                'objectives' => ['Optimize page load times', 'Integrate game trailers seamlessly', 'Improve user engagement metrics'],
                'gallery' => [],
                'videos' => [['title' => 'Playstation Showcase', 'youtubeUrl' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'thumbnailPath' => 'images/works/5.webp', 'duration' => '3:20']],
                'testimonial' => ['quote' => 'Our website performance improved dramatically with the optimization work.', 'name' => 'Tech Lead', 'role' => 'Playstation Digital'],
                'sort_order' => 5,
            ],
            [
                'title' => 'Wilson',
                'slug' => 'wilson',
                'cover_image' => 'images/works/6.webp',
                'category' => 'Landing Page Design',
                'year' => '2019',
                'project_type' => 'photo',
                'featured' => false,
                'overview' => 'High-conversion landing page design for Wilson\'s sports equipment campaigns.',
                'objectives' => ['Maximize campaign conversions', 'Clean, sports-focused aesthetic', 'A/B testing ready templates'],
                'gallery' => [['imagePath' => 'images/works/6.webp', 'alt' => 'Wilson Landing Page', 'caption' => 'Campaign Landing']],
                'videos' => [],
                'testimonial' => ['quote' => 'The landing pages delivered exceptional conversion rates for our campaigns.', 'name' => 'Brand Manager', 'role' => 'Wilson Sporting Goods'],
                'sort_order' => 6,
            ],
        ];

        foreach ($projects as $p) {
            Project::create($p);
        }

        // ─── Personal Info ────────────────────────────────────
        PersonalInfo::create([
            'name' => 'NATHAN',
            'title' => 'A Website Designer from New York',
            'subtitle' => 'Available for Work',
            'about_title' => 'Transforming your vision into a dynamic web experience through meticulously crafted designs, intuitive user interfaces, and robust functionality.',
            'bio1' => 'Hi there! I\'m Nathan, a web designer with a passion for creating exceptional digital experiences. With over 15 years in the industry, I have skills in designing websites that are not only visually appealing but also functional and user-friendly.',
            'bio2' => 'I specialize in crafting bespoke websites using the latest technologies and design trends, including HTML5, CSS3, JavaScript, and popular content management systems like WordPress, Joomla, and Shopify.',
            'profile_image' => 'images/misc/1.webp',
            'available_for_work' => true,
            'stats' => [
                ['label' => 'Hours of Works', 'value' => 8240],
                ['label' => 'Projects Done', 'value' => 315],
                ['label' => 'Satisfied Customers', 'value' => 250],
                ['label' => 'Awards Winning', 'value' => 32],
            ],
        ]);

        // ─── Services ─────────────────────────────────────────
        $services = [
            ['title' => 'Custom Website Design', 'description' => "Tailored websites to match your brand's unique identity and goals.", 'sort_order' => 1],
            ['title' => 'E-commerce Website', 'description' => 'Creating user-friendly online stores with secure payment gateways.', 'sort_order' => 2],
            ['title' => 'Landing Page Design', 'description' => 'High-conversion landing pages for specific marketing campaigns.', 'sort_order' => 3],
            ['title' => 'Front-end Development', 'description' => 'Implementing designs with clean and efficient code using HTML, CSS, JS.', 'sort_order' => 4],
            ['title' => 'Back-end Development', 'description' => 'Building robust back-end systems using technologies like PHP and databases.', 'sort_order' => 5],
            ['title' => 'Content Management System', 'description' => 'Integrating and customizing CMS platforms for easy content management.', 'sort_order' => 6],
        ];
        foreach ($services as $s) {
            Service::create($s);
        }

        // ─── Testimonials ─────────────────────────────────────
        $testimonials = [
            ['name' => 'John Reynolds', 'role' => 'CEO of Boutique Bliss', 'quote' => 'Our e-commerce website needed a complete overhaul, and Nathan delivered beyond our expectations. The new design is visually stunning and incredibly user-friendly.', 'avatar' => 'images/testimonial/1.webp', 'sort_order' => 1],
            ['name' => 'David Kim', 'role' => 'Freelance Photographer', 'quote' => 'Nathan helped me design a personal portfolio website that truly highlights my work as a photographer. The site is clean, modern, and visually appealing – exactly what I wanted.', 'avatar' => 'images/testimonial/2.webp', 'sort_order' => 2],
            ['name' => 'Dr. Robert Harris', 'role' => 'Founder of Harris Clinic', 'quote' => 'The new site is not only visually appealing but also highly functional, with easy navigation for our patients. The online appointment booking system has been a game-changer.', 'avatar' => 'images/testimonial/3.webp', 'sort_order' => 3],
        ];
        foreach ($testimonials as $t) {
            Testimonial::create($t);
        }

        // ─── Skills ───────────────────────────────────────────
        $skills = [
            ['name' => 'Figma', 'logo' => 'images/logo/figma.webp', 'skill_type' => 'tool', 'sort_order' => 1],
            ['name' => 'Photoshop', 'logo' => 'images/logo/photoshop.webp', 'skill_type' => 'tool', 'sort_order' => 2],
            ['name' => 'Sketch', 'logo' => 'images/logo/sketch.webp', 'skill_type' => 'tool', 'sort_order' => 3],
            ['name' => 'Adobe XD', 'logo' => 'images/logo/xd.webp', 'skill_type' => 'tool', 'sort_order' => 4],
            ['name' => 'HTML', 'percentage' => 80, 'skill_type' => 'coding', 'sort_order' => 5],
            ['name' => 'CSS', 'percentage' => 70, 'skill_type' => 'coding', 'sort_order' => 6],
            ['name' => 'BOOTSTRAP', 'percentage' => 82, 'skill_type' => 'coding', 'sort_order' => 7],
            ['name' => 'JAVASCRIPT', 'percentage' => 62, 'skill_type' => 'coding', 'sort_order' => 8],
            ['name' => 'PHP', 'percentage' => 90, 'skill_type' => 'coding', 'sort_order' => 9],
            ['name' => 'REACT', 'percentage' => 85, 'skill_type' => 'coding', 'sort_order' => 10],
        ];
        foreach ($skills as $sk) {
            Skill::create($sk);
        }

        // ─── Education ────────────────────────────────────────
        $education = [
            ['year' => '2018', 'degree' => 'Master in Design', 'school' => 'New York University', 'sort_order' => 1],
            ['year' => '2014', 'degree' => 'Bachelor of Arts', 'school' => 'University of London', 'sort_order' => 2],
            ['year' => '2011', 'degree' => 'Artist of College', 'school' => 'University of Sydney', 'sort_order' => 3],
        ];
        foreach ($education as $e) {
            Education::create($e);
        }

        // ─── Experience ───────────────────────────────────────
        $experiences = [
            ['period' => '2022 – Present', 'title' => 'Lead Website Designer', 'company' => 'Tech Solutions Inc', 'sort_order' => 1],
            ['period' => '2018 - 2022', 'title' => 'Mid-Level Website Designer', 'company' => 'Creativo Web Agency', 'sort_order' => 2],
            ['period' => '2016 - 2018', 'title' => 'Junior Website Designer', 'company' => 'Rocket Web Services', 'sort_order' => 3],
        ];
        foreach ($experiences as $ex) {
            Experience::create($ex);
        }

        // ─── Blog Posts ───────────────────────────────────────
        $posts = [
            ['title' => 'Mastering Modern Web Design: Trends and Techniques for 2024', 'slug' => 'mastering-modern-web-design', 'cover_image' => 'images/blog/1.webp', 'category' => 'Tips & Tricks', 'published_at' => '2024-03-18'],
            ['title' => 'The Future of Web Development: Emerging Technologies to Watch', 'slug' => 'future-of-web-development', 'cover_image' => 'images/blog/2.webp', 'category' => 'Tips & Tricks', 'published_at' => '2024-03-18'],
            ['title' => 'Optimizing Website Performance: Strategies for Faster Load Times', 'slug' => 'optimizing-website-performance', 'cover_image' => 'images/blog/3.webp', 'category' => 'Tips & Tricks', 'published_at' => '2024-03-18'],
            ['title' => 'Responsive Design Best Practices: Ensuring a Seamless Mobile Experience', 'slug' => 'responsive-design-best-practices', 'cover_image' => 'images/blog/4.webp', 'category' => 'Tips & Tricks', 'published_at' => '2024-03-18'],
            ['title' => 'Web Design Mistakes to Avoid: Common Pitfalls and How to Fix Them', 'slug' => 'web-design-mistakes-to-avoid', 'cover_image' => 'images/blog/5.webp', 'category' => 'Tips & Tricks', 'published_at' => '2024-03-18'],
            ['title' => 'Creating Accessible Websites: Why Inclusive Design Matters', 'slug' => 'creating-accessible-websites', 'cover_image' => 'images/blog/6.webp', 'category' => 'Tips & Tricks', 'published_at' => '2024-03-18'],
        ];
        foreach ($posts as $post) {
            BlogPost::create($post);
        }

        // ─── Site Settings ────────────────────────────────────
        SiteSetting::create([
            'site_title' => 'Nathan — Personal Portfolio Website',
            'site_description' => 'Personal Portfolio Website',
            'menus' => [
                ['text' => 'Home', 'href' => '/'],
                ['text' => 'About Me', 'href' => '/about'],
                ['text' => 'What I Do', 'href' => '/services'],
                ['text' => 'Works', 'href' => '/works'],
                ['text' => 'Blog', 'href' => '/blog'],
                ['text' => 'Hire Me', 'href' => '/contact'],
            ],
            'social_links' => [
                ['platform' => 'Facebook', 'url' => '#'],
                ['platform' => 'Twitter', 'url' => '#'],
                ['platform' => 'Instagram', 'url' => '#'],
            ],
            'footer_text' => 'All Right Reserved',
            'marquee_texts' => [
                'CUSTOM WEBSITE DESIGN',
                'E-COMMERCE WEBSITE',
                'LANDING PAGE DESIGN',
                'FRONT-END DEVELOPMENT',
                'BACK-END DEVELOPMENT',
                'CONTENT MANAGEMENT SYSTEM',
            ],
        ]);
    }
}
