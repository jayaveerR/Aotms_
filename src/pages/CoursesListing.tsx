import React from 'react';
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { coursesData } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";

const CoursesListing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10 section-heading">Our Comprehensive Courses</h1>
        <p className="text-xl text-center text-muted-foreground mb-12 section-subheading">
          Explore our wide range of professional training programs designed to launch and advance your career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesListing;