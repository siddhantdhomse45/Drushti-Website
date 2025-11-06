import React from 'react'
import Hero from '../../components/hero/Hero'
import Courses from '../../components/courses/Courses'
import Features from '../../components/features/Features'
import AboutUs from '../../components/about/AboutUs'
import StatsSection from '../../components/StatsSection/StatsSection'
import Video from '../../components/video/Video'
import EnrollmentForm from '../../components/skills/EnrollmentForm'
import Department from '../../components/departments/Department'
import Testimonials from '../../components/testmonials/Testimonials'
import LogoGrid from '../../components/logo/LogoGrid'

function Home() {
    return (
        <div>
            <Hero />
            <Features />
            <AboutUs />
            <StatsSection />
            <Courses />
            <Video />
            <EnrollmentForm />
            <Department />
            <Testimonials />
            <LogoGrid />
        </div>
    )
}

export default Home