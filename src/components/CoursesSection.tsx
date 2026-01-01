import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart, Star } from "lucide-react";

const topCourses = [
  {
    id: 1,
    title: "Embedded Systems",
    price: 35000,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 120,
    isTopCourse: true,
  },
  {
    id: 2,
    title: "Cloud Computing",
    price: 35000,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 150,
    isTopCourse: true,
  },
  {
    id: 3,
    title: "Quantum Computing",
    price: 35000,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 90,
    isTopCourse: true,
  },
  {
    id: 4,
    title: "Data Science",
    price: 45000,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 200,
    isTopCourse: true,
  },
  {
    id: 5,
    title: "Data Analytics",
    price: 35000,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 180,
    isTopCourse: true,
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    price: 50000,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 250,
    isTopCourse: false,
  },
  {
    id: 7,
    title: "Java Full Stack",
    price: 40000,
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 130,
    isTopCourse: false,
  },
  {
    id: 8,
    title: "Python Full Stack",
    price: 40000,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 160,
    isTopCourse: false,
  },
];

export const CoursesSection = () => {
  const { addToCart, items } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="courses" className="py-16 md:py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'linear-gradient(180deg, #0c0a09 0%, #1c1917 50%, #0c0a09 100%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Explore Our </span>
            <span className="text-primary">Top Courses</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked courses by industry experts to boost your career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {topCourses.map((course, index) => {
                const isAdded = items.some(item => item.id === course.id);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="p-1 h-[400px]"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="h-full relative overflow-hidden rounded-lg shadow-lg group"
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                      >
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                        
                        {course.isTopCourse && (
                          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
                            TOP COURSE
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                          <h3 className="text-xl font-bold text-white truncate">{course.title}</h3>
                          <div className="flex items-center gap-1 text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold">{course.rating}</span>
                          </div>
                        </div>

                        <motion.div
                          className="absolute inset-0 bg-black/60 backdrop-blur-sm p-6 flex flex-col"
                          variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="font-bold">{course.rating}</span>
                            </div>
                            <span>({course.reviews} reviews)</span>
                          </div>
                          <div className="text-2xl font-bold text-primary mb-6 mt-auto pt-4">
                            {formatPrice(course.price)}
                          </div>
                          <Button
                            onClick={() => addToCart(course)}
                            disabled={isAdded}
                            className="w-full"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            {isAdded ? "Added to Cart" : "Add to Cart"}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="ml-4" />
            <CarouselNext className="mr-4" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
