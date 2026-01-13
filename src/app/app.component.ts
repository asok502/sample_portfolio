import { Component, OnInit, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  link: string;
  image: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Certification {
  name: string;
  year: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Angular 21 Signals (Modern State Management)
  activeSection = signal('home');
  scrollY = signal(0);
  cursorPos = signal({ x: 0, y: 0 });
  isMenuOpen = signal(false);
  
  // Computed signals
  isScrolled = computed(() => this.scrollY() > 50);

  readonly skills: Skill[] = [
    { name: 'Java & Spring Boot', level: 95, color: 'green' },
    { name: 'Angular 21 & TypeScript', level: 92, color: 'red' },
    { name: 'PostgreSQL & MySQL', level: 88, color: 'blue' },
    { name: 'REST API & Microservices', level: 93, color: 'purple' },
    { name: 'Docker & Kubernetes', level: 85, color: 'cyan' },
    { name: 'AWS & Cloud Services', level: 87, color: 'orange' }
  ];

  readonly projects: Project[] = [
    {
      title: 'Enterprise E-Commerce Platform',
      description: 'Full-stack e-commerce with Spring Boot 3.x, Angular 21, real-time inventory, payment gateway integration, and microservices architecture.',
      tech: ['Spring Boot 3', 'Angular 21', 'PostgreSQL', 'Docker', 'Redis'],
      gradient: 'purple-pink',
      link: 'https://github.com/yourusername/ecommerce',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
    },
    {
      title: 'Real-Time Chat & Collaboration',
      description: 'Scalable WebSocket-based chat with Spring Boot, Angular 21, group messaging, file sharing, video calls, and end-to-end encryption.',
      tech: ['Spring Boot', 'WebSocket', 'Angular 21', 'MongoDB', 'WebRTC'],
      gradient: 'blue-cyan',
      link: 'https://github.com/yourusername/chat-app',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop'
    },
    {
      title: 'Banking & Financial System',
      description: 'Secure banking platform with transaction management, loan processing, account operations, JWT authentication, and comprehensive audit logging.',
      tech: ['Spring Boot', 'Angular 21', 'MySQL', 'Spring Security', 'JWT'],
      gradient: 'green-teal',
      link: 'https://github.com/yourusername/banking',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'Enterprise task management with AI recommendations, Kanban boards, sprint planning, real-time collaboration, and advanced analytics dashboard.',
      tech: ['Spring Boot', 'Angular 21', 'PostgreSQL', 'Python ML', 'Chart.js'],
      gradient: 'orange-yellow',
      link: 'https://github.com/yourusername/task-manager',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      title: 'Healthcare Management Portal',
      description: 'Complete healthcare solution with appointment scheduling, telemedicine, electronic health records, prescription management, and patient portal.',
      tech: ['Spring Boot', 'Angular 21', 'MySQL', 'WebRTC', 'AWS S3'],
      gradient: 'indigo-purple',
      link: 'https://github.com/yourusername/healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    },
    {
      title: 'Social Media Analytics Suite',
      description: 'Advanced analytics platform with ML-powered sentiment analysis, trend prediction, real-time data visualization, and automated reporting.',
      tech: ['Spring Boot', 'Angular 21', 'PostgreSQL', 'Python', 'D3.js'],
      gradient: 'rose-red',
      link: 'https://github.com/yourusername/analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ];

  readonly experience: Experience[] = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise microservices architecture, mentoring team of 5 developers, implementing CI/CD pipelines with Jenkins and Docker.',
      achievements: [
        'Reduced API response time by 40% through optimization',
        'Successfully migrated monolith to microservices architecture',
        'Built and deployed 5+ enterprise-grade applications',
        'Implemented automated testing achieving 90% code coverage'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: 'Mar 2021 - Dec 2022',
      description: 'Developed scalable web applications using Spring Boot and Angular, integrated payment gateways, optimized database queries and implemented real-time features.',
      achievements: [
        'Improved application performance by 35%',
        'Implemented WebSocket-based real-time notifications',
        'Reduced production bugs by 50% with comprehensive testing',
        'Led migration from Angular 12 to Angular 15'
      ]
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'StartUp Ventures',
      period: 'Jun 2020 - Feb 2021',
      description: 'Built RESTful APIs with Spring Boot, created responsive UI components with Angular, participated in agile sprints and code reviews.',
      achievements: [
        'Delivered 15+ features ahead of schedule',
        'Wrote comprehensive unit tests (85% coverage)',
        'Contributed to 3 open-source Angular libraries',
        'Received "Developer of the Month" award twice'
      ]
    }
  ];

  readonly certifications: Certification[] = [
    { name: 'Oracle Certified Professional: Java SE 17', year: '2024' },
    { name: 'AWS Certified Developer - Associate', year: '2023' },
    { name: 'Spring Professional Certification', year: '2023' },
    { name: 'Angular Advanced Developer Certification', year: '2022' },
    { name: 'Docker Certified Associate', year: '2022' },
    { name: 'Kubernetes Administrator (CKA)', year: '2023' }
  ];

  readonly techStack = [
    'Java 17', 'Spring Boot 3', 'Angular 21', 'TypeScript', 
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'Azure',
    'Git', 'Jenkins', 'JDBC', 'JPA', 'REST API', 'GraphQL'
  ];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
    this.updateActiveSection();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorPos.set({ x: event.clientX, y: event.clientY });
  }

  updateActiveSection(): void {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const scrollPos = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  getSkillColor(color: string): string {
    const colors: Record<string, string> = {
      green: '#10b981',
      red: '#ef4444',
      blue: '#3b82f6',
      purple: '#a855f7',
      cyan: '#06b6d4',
      orange: '#f97316'
    };
    return colors[color] ?? '#a855f7';
  }

  downloadCV(): void {
    window.open('assets/resume.pdf', '_blank');
  }

  openProject(link: string): void {
    window.open(link, '_blank');
  }

  sendEmail(): void {
    window.location.href = 'mailto:your.email@example.com?subject=Portfolio Inquiry';
  }

  // Angular 21 specific: Using trackBy for performance
  trackByIndex(index: number): number {
    return index;
  }

  trackByName(index: number, item: { name: string }): string {
    return item.name;
  }
}