import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Crown, BookOpen, Users, Trophy, Mail, Calendar, Star, Target } from 'lucide-react'
import './App.css'

// Import images
import jaanPhoto from './assets/PzlSP0pDnXzS.jpg'
import chessBoard from './assets/XAKGSAMiyt5v.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">Jaan Ehlvest</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'coaching', label: 'Coaching' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'books', label: 'Books' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    activeSection === item.id ? 'text-amber-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 text-white hover:bg-amber-700">
                  Grandmaster Since 1987
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Jaan Ehlvest
                </h1>
                <p className="text-xl text-blue-200 font-medium">
                  "Chess is a Process"
                </p>
                <p className="text-lg text-gray-300 max-w-lg">
                  Estonian-American Grandmaster, former World #4, psychology expert, 
                  and dedicated chess coach helping players unlock their potential through 
                  understanding the deeper aspects of the game.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => scrollToSection('coaching')}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Learn Chess Coaching
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                  onClick={() => scrollToSection('about')}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Biography
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={jaanPhoto} 
                  alt="Jaan Ehlvest in deep concentration during a chess game"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-blue-600/20 rounded-lg blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Jaan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey from Estonian prodigy to world-class grandmaster and psychology-driven chess educator
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">The Chess Psychologist</h3>
              <p className="text-gray-700 leading-relaxed">
                Born in Estonia in 1962, Jaan Ehlvest became one of the world's elite chess players 
                in the late 1980s, reaching a peak rating of 2660 and ranking as high as #4 in the world. 
                His unique combination of chess mastery and psychological expertise sets him apart in 
                the chess education world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a Master's degree in Psychology, Jaan brings a scientific approach to chess 
                improvement, understanding that chess success is as much about mental processes 
                as it is about tactical knowledge. His philosophy that "Chess is a Process" 
                reflects his deep understanding of how players develop and improve over time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">2660</div>
                  <div className="text-sm text-gray-600">Peak Rating</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">#4</div>
                  <div className="text-sm text-gray-600">World Ranking</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={chessBoard} 
                alt="Professional chess setup"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Career Timeline</h3>
            <div className="space-y-6">
              {[
                { year: '1962', title: 'Born in Estonia', description: 'October 14th, beginning of a chess legend' },
                { year: '1983', title: 'European Junior Champion', description: 'Became International Master by winning the championship' },
                { year: '1986', title: 'Estonian Champion', description: 'Dominated national chess scene' },
                { year: '1987', title: 'Grandmaster Title', description: 'Achieved the highest title in chess, tied for 2nd in Zagreb Interzonal' },
                { year: '1989', title: 'Estonian Athlete of the Year', description: 'Recognition for outstanding sporting achievements' },
                { year: '1994', title: 'New York Open Winner', description: 'Major tournament victory in the United States' },
                { year: '2006', title: 'Represents USA', description: 'Switched to playing under the US flag while maintaining Estonian citizenship' },
                { year: 'Present', title: 'Coach & Author', description: 'Dedicated to chess education and psychology-based improvement' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year === 'Present' ? <Star className="h-6 w-6" /> : milestone.year.slice(-2)}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900">{milestone.title}</h4>
                    <p className="text-amber-600 font-medium">{milestone.year}</p>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section id="coaching" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chess Coaching</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality over quantity - a psychology-driven approach to chess improvement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Personalized Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Individual coaching sessions tailored to your specific needs and playing style, 
                  focusing on quality over quantity of students.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Psychology-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unique approach combining chess expertise with psychological insights to 
                  understand how players learn and improve most effectively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle>Elite Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from someone who has competed at the highest level against world champions 
                  like Kasparov, Karpov, and Spassky.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Coaching Philosophy</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Process-Oriented Learning</h4>
                <p className="text-gray-700 mb-4">
                  "Chess is a Process" - Understanding that improvement comes through systematic 
                  development of thinking patterns, not just memorizing moves.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Individual Assessment</h4>
                <p className="text-gray-700">
                  Using psychological principles to assess each student's learning style, 
                  strengths, and areas for improvement.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Quality Focus</h4>
                <p className="text-gray-700 mb-4">
                  Prioritizing deep understanding over surface-level knowledge, working with 
                  fewer students to ensure maximum attention and results.
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Holistic Development</h4>
                <p className="text-gray-700">
                  Addressing not just chess skills but also mental preparation, concentration, 
                  and decision-making processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of excellence spanning decades at the highest level of competitive chess
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Crown, title: 'Grandmaster', subtitle: 'Since 1987', color: 'text-amber-600' },
              { icon: Trophy, title: 'World #4', subtitle: 'Peak Ranking', color: 'text-blue-600' },
              { icon: Star, title: '2660 Rating', subtitle: 'Peak FIDE', color: 'text-purple-600' },
              { icon: Target, title: 'Multiple Titles', subtitle: 'National & International', color: 'text-green-600' }
            ].map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <achievement.icon className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <CardDescription className="font-medium">{achievement.subtitle}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Major Tournament Victories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <span>European Junior Championship (1983)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <span>Estonian Championship (1986)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <span>New York Open (1994)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <span>Heart of Finland Open (2012)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <span>Multiple World Cup Participations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notable Opponents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Throughout his career, Jaan has faced the greatest players in chess history:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Crown className="h-5 w-5 text-amber-600" />
                    <span>Garry Kasparov - World Champion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Crown className="h-5 w-5 text-amber-600" />
                    <span>Anatoly Karpov - World Champion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Crown className="h-5 w-5 text-amber-600" />
                    <span>Boris Spassky - World Champion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-amber-600" />
                    <span>Vladimir Kramnik - World Champion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Books & Writing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing chess knowledge and insights through published works and online content
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-amber-600" />
                    <span>"The Story of a Chess Player"</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    An autobiographical work detailing Jaan's journey from Estonian chess prodigy 
                    to world-class grandmaster, offering insights into the chess world and personal development.
                  </p>
                  <Badge variant="secondary">Autobiography</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-amber-600" />
                    <span>Chess Books for Children</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Educational chess books designed specifically for young learners, incorporating 
                    psychological principles to make chess accessible and engaging for children.
                  </p>
                  <Badge variant="secondary">Educational</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-amber-600" />
                    <span>Chess.com Blog</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Regular articles and insights on chess improvement, psychology, and analysis 
                    of current chess events. Recognized as a top blogger on Chess.com.
                  </p>
                  <Badge variant="secondary">Online Content</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Writing Philosophy</h3>
                <p className="text-gray-700 mb-4">
                  "I try to make chess easy for others to understand as an artistic sport. 
                  Because of this, I have written books for children to learn chess. 
                  I try to teach children the rules and how to play, not just how to win."
                </p>
                <p className="text-gray-700">
                  Jaan's approach to chess writing emphasizes understanding over memorization, 
                  making complex concepts accessible to players of all levels.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Topics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Chess Psychology and Mental Training</li>
                  <li>• Opening Principles and Strategy</li>
                  <li>• Endgame Techniques</li>
                  <li>• Tournament Preparation</li>
                  <li>• Chess History and Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to take your chess to the next level? Contact Jaan for coaching inquiries and chess consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Coaching Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Private Coaching</h4>
                      <p className="text-gray-300">One-on-one sessions tailored to your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <BookOpen className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Chess Psychology</h4>
                      <p className="text-gray-300">Mental training and psychological aspects of chess</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Trophy className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Tournament Preparation</h4>
                      <p className="text-gray-300">Specialized training for competitive play</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                    <span>Available through Chess.com coaching platform</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-amber-600" />
                    <span>Flexible scheduling for international students</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Chess Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg italic text-gray-300">
                  "Chess is a sport that is rather secretive when played at the top level because 
                  these tournaments are only for an elite few. But chess is otherwise an artistic 
                  sport and so I try to make it easy for others to understand as such."
                </blockquote>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-gray-300">
                    With over three decades of experience at the highest level of chess, 
                    Jaan brings a unique perspective that combines world-class playing strength 
                    with deep psychological understanding.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Jaan Ehlvest. All rights reserved. | Grandmaster • Coach • Author
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

