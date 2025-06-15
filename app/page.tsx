import { Clock, MapPin, Phone, Mail, MessageCircle, Heart, User, GraduationCap, Instagram, Calendar, Music, Users, BookOpen, Coffee, Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">Igreja Presbiteriana Metropolitana</h1>
              <p className="text-slate-600 text-sm mt-1">São Paulo</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex" asChild>
                <a href="https://www.youtube.com/@IPMetropolitanadeSP" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Ao Vivo
                </a>
              </Button>
              <Button size="sm" className="bg-churchBlue-500 hover:bg-churchBlue-600 text-white transition-all duration-300 hover:scale-105">
                <Heart className="w-4 h-4 mr-2" />
                Contribua
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32 bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(36, 42, 76, 0.7), rgba(36, 42, 76, 0.5)), url('/images/hero-bg.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
              Seja bem-vindo à<br />
              <span className="text-yellow-300">IP Metropolitana!</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light opacity-90">
              Uma comunidade de fé no coração de São Paulo, vivenciando o amor de Cristo em comunhão
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-white opacity-70" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-churchBlue-50 via-white to-churchBlue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nossa Igreja em Números</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Deus tem abençoado nossa comunidade ao longo dos anos</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-churchBlue-100 to-churchBlue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Users className="w-10 h-10 text-churchBlue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <h4 className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-churchBlue-600 transition-colors">200+</h4>
              <p className="text-slate-600 font-medium">Membros e Congregados</p>
              <p className="text-slate-500 text-sm mt-1">Crescendo em fé</p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Calendar className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h4 className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">3</h4>
              <p className="text-slate-600 font-medium">Anos de História</p>
              <p className="text-slate-500 text-sm mt-1">Desde 2022</p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Heart className="w-10 h-10 text-orange-600" />
                </div>
              </div>
              <h4 className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">6+</h4>
              <p className="text-slate-600 font-medium">Ministérios Ativos</p>
              <p className="text-slate-500 text-sm mt-1">Servindo com amor</p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <BookOpen className="w-10 h-10 text-purple-600" />
                </div>
                <div className="absolute -top-1 -right-1 text-yellow-500">
                  <div className="w-3 h-3 animate-pulse">✨</div>
                </div>
              </div>
              <h4 className="text-4xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">2</h4>
              <p className="text-slate-600 font-medium">Cultos Semanais</p>
              <p className="text-slate-500 text-sm mt-1">Momentos de adoração</p>
            </div>
          </div>
          
          {/* Additional Impact Stats */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-slate-800 mb-2">Nosso Impacto na Comunidade</h4>
              <p className="text-slate-600">Vivendo o evangelho em ação</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Music className="w-8 h-8 text-blue-600" />
                </div>
                <h5 className="text-xl font-bold text-slate-800 mb-1">Louvor e Adoração</h5>
                <p className="text-slate-600 text-sm">Música que toca corações</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h5 className="text-xl font-bold text-slate-800 mb-1">Comunhão</h5>
                <p className="text-slate-600 text-sm">Relacionamentos verdadeiros</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-rose-600" />
                </div>
                <h5 className="text-xl font-bold text-slate-800 mb-1">Cuidado Pastoral</h5>
                <p className="text-slate-600 text-sm">Amor e suporte mútuo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Schedule */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Programação</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Junte-se a nós em nossos momentos de adoração e comunhão</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-churchBlue-100 hover:border-churchBlue-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2 text-churchBlue-800 group-hover:text-churchBlue-600 transition-colors">
                  <Clock className="w-6 h-6" />
                  Culto Matutino
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-3">Domingos</div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Coffee className="w-4 h-4" />
                    <span><span className="font-semibold">Café:</span> 9h40</span>
                  </div>
                  <div className="text-3xl font-bold text-churchBlue-600">
                    <span className="font-semibold">Culto:</span> 10h15
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm mb-4">
                  Culto principal
                </Badge>
                <p className="text-sm text-slate-600">Culto em família com louvor, pregação e Santa Ceia</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center gap-2 text-green-800 group-hover:text-green-600 transition-colors">
                  <BookOpen className="w-6 h-6" />
                  Éden - Estudo Devocional
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-slate-800 mb-3">Domingos</div>
                <div className="text-3xl font-bold text-green-600 mb-4">19h30</div>
                <Badge variant="secondary" className="text-sm mb-4">
                  Estudo noturno
                </Badge>
                <p className="text-sm text-slate-600">Estudo bíblico aprofundado e oração</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="https://www.youtube.com/@IPMetropolitanadeSP" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Assistir Online
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nossos Ministérios</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Oportunidades para servir e crescer em comunidade</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Music className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Louvor</h4>
                <p className="text-slate-600 text-sm">Ministério de música e adoração</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Jovens</h4>
                <p className="text-slate-600 text-sm">Atividades e estudos para jovens</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Diaconia</h4>
                <p className="text-slate-600 text-sm">Cuidado e assistência à comunidade</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Escola Dominical</h4>
                <p className="text-slate-600 text-sm">Educação cristã para todas as idades</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Mulheres</h4>
                <p className="text-slate-600 text-sm">Ministério feminino e atividades</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                  <MessageCircle className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Evangelismo</h4>
                <p className="text-slate-600 text-sm">Missões e evangelização</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nossa Comunidade</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Momentos especiais de nossa jornada juntos em Cristo</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="aspect-square bg-gradient-to-br from-churchBlue-100 to-churchBlue-200 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Users className="w-12 h-12 text-churchBlue-600 opacity-60" />
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-12 h-12 text-green-600 opacity-60" />
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Music className="w-12 h-12 text-orange-600 opacity-60" />
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="w-12 h-12 text-purple-600 opacity-60" />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="https://www.instagram.com/ipmetropolitanasp/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Ver mais no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Onde Estamos</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Venha nos visitar e fazer parte da nossa família</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Address and Details */}
            <div className="space-y-6">
              <Card className="border-2 border-churchBlue-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-churchBlue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-churchBlue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">Nosso Endereço</h4>
                      <p className="text-lg text-slate-700 font-medium">Av. Fagundes Filho, 141</p>
                      <p className="text-slate-600">São Judas, São Paulo - SP</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button className="w-full bg-churchBlue-500 hover:bg-churchBlue-600 text-white" asChild>
                      <a
                        href="https://maps.google.com/?q=Av.+Fagundes+Filho,+141+-+São+Judas,+São+Paulo+-+SP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Ver no Google Maps
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://waze.com/ul?q=Av.+Fagundes+Filho,+141+São+Paulo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Abrir no Waze
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border border-green-200 bg-green-50">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <h5 className="font-semibold text-green-800 mb-1">Horários</h5>
                    <p className="text-sm text-green-700">
                      Dom: 9h40 (Café)
                      <br />
                      Dom: 10h15 e 19h30
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-churchBlue-200 bg-churchBlue-50">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-churchBlue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-5 h-5 text-churchBlue-600" />
                    </div>
                    <h5 className="font-semibold text-churchBlue-800 mb-1">Contato</h5>
                    <p className="text-sm text-churchBlue-700">
                      (11) 90000-0000
                      <br />
                      WhatsApp disponível
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Transportation Info */}
              <Card className="border border-slate-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-slate-600" />
                    Como Chegar
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-churchBlue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Metrô:</span> Estação São Judas (Linha 1-Azul)
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Ônibus:</span> Diversas linhas passam pela Av. Fagundes Filho
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Carro:</span> Estacionamento disponível nas proximidades
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="lg:sticky lg:top-8">
              <Card className="h-full min-h-[400px]">
                <CardContent className="p-0 h-full">
                  <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-churchBlue-100 to-churchBlue-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Map placeholder with subtle pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>

                    <div className="text-center z-10">
                      <div className="w-16 h-16 bg-churchBlue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-churchBlue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-700 mb-2">Mapa Interativo</h4>
                      <p className="text-slate-500 mb-4 max-w-xs">
                        Visualize nossa localização e encontre a melhor rota
                      </p>
                      <Button asChild className="bg-churchBlue-500 hover:bg-churchBlue-600 text-white">
                        <a
                          href="https://maps.google.com/?q=Av.+Fagundes+Filho,+141+-+São+Judas,+São+Paulo+-+SP"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Abrir Mapa
                        </a>
                      </Button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-churchBlue-300 rounded-full opacity-60"></div>
                    <div className="absolute bottom-8 left-6 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
                    <div className="absolute top-1/3 left-8 w-1 h-1 bg-orange-300 rounded-full opacity-60"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+5511900000000">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/5511900000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.instagram.com/ipmetropolitanasp/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Nossa História</h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  A Igreja Presbiteriana Metropolitana de São Paulo começou como uma ideia durante a formação do
                  Presbitério Centro Paulistano. A decisão de criar uma igreja para receber o Rev. Jônatas Abdias de
                  Macedo resultou na congregação.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Inicialmente, o projeto era bilíngue, mas depois focou no português. Reuniões quinzenais prepararam o
                  grupo para os cultos, que começaram na casa de irmãos que gentilmente ofereceram espaço.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Com a pandemia, os encontros mudaram para virtuais. Com o retorno presencial, a congregação se
                  estabeleceu em um salão em 30 de agosto de 2020.
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  Formalizada em novembro de 2022, a igreja seguiu os trâmites necessários para sua organização, sendo
                  aprovada pelo Presbitério Centro Paulistano e designada uma comissão organizadora para sua
                  constituição oficial, marcada para <strong>29 de outubro de 2023</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Liderança Pastoral</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Conhece nossa liderança dedicada ao ministério</p>
          </div>
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
                <div className="text-center md:text-left">
                  <div className="w-32 h-32 bg-gradient-to-br from-churchBlue-100 to-churchBlue-200 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <User className="w-16 h-16 text-churchBlue-600" />
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-slate-800 mb-2">Pastor Titular</h4>
                  <p className="text-xl text-churchBlue-600 font-medium mb-4">Rev. Jônatas Abdias de Macedo</p>
                  <p className="text-slate-600 leading-relaxed">
                    Dedicado ao ministério pastoral com formação sólida em teologia e experiência no cuidado da comunidade cristã.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-xl font-semibold text-slate-800 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-churchBlue-600" />
                  Formação Acadêmica
                </h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-churchBlue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-slate-800">Bacharel em Teologia</p>
                          <p className="text-sm text-slate-600">Seminário Teológico Presbiteriano Rev. José Manoel da Conceição</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-slate-800">Bacharel em Teologia</p>
                          <p className="text-sm text-slate-600">Escola Superior de Teologia - Universidade Presbiteriana Mackenzie</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-slate-800">Mestre em Teologia Pastoral</p>
                          <p className="text-sm text-slate-600">Centro Presbiteriano de Pós-Graduação Andrew Jumper</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-slate-800">Doutor em Teologia Pastoral (Ph.D)</p>
                          <p className="text-sm text-slate-600">North-West University (NWU) - Potchefstroom, África do Sul</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-churchBlue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Mantenha-se Conectado</h3>
            <p className="text-churchBlue-100 text-lg mb-8 max-w-2xl mx-auto">
              Receba atualizações sobre nossos cultos, eventos e atividades da igreja diretamente no seu e-mail
            </p>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="bg-white text-churchBlue-600 hover:bg-white/90 font-medium px-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Inscrever
                  </Button>
                </div>
                <p className="text-churchBlue-100 text-sm mt-4">
                  Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact and Contribution */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Fale Conosco</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contato
                </CardTitle>
                <CardDescription>Entre em contato conosco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-slate-600">@ipmetropolitanasp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-churchBlue-600" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-slate-600">email.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-slate-600">(11) 90000-0000</p>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <a href="https://www.instagram.com/ipmetropolitanasp/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Seguir no Instagram
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/5511900000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Contribua
                </CardTitle>
                <CardDescription>Apoie o ministério da igreja</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">PIX</h5>
                  <p className="text-slate-600 text-sm mb-4">Chave PIX disponível para contribuições</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Dados Bancários</h5>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>Banco: [Informações bancárias]</p>
                    <p>Agência: [Número da agência]</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full" variant="outline">
                    <Heart className="w-4 h-4 mr-2" />
                    Ver dados completos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-churchBlue-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Church Info */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-bold mb-4">Igreja Presbiteriana Metropolitana</h4>
              <p className="text-churchBlue-200 mb-6 leading-relaxed max-w-md">
                "Vivendo a simplicidade do evangelho na complexidade da vida em São Paulo"
              </p>
              <div className="space-y-2 text-churchBlue-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Av. Fagundes Filho, 141 - São Judas, SP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 99100-6687</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@ipmetropolitana.com.br</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Acesso Rápido</h5>
              <ul className="space-y-2 text-churchBlue-300">
                <li><a href="#" className="hover:text-white transition-colors">Programação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ministérios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nossa História</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Localização</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contribua</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Redes Sociais</h5>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/ipmetropolitanasp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-churchBlue-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@ipmetropolitanasp</span>
                </a>
                <a
                  href="https://www.youtube.com/@IPMetropolitanadeSP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-churchBlue-300 hover:text-white transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://wa.me/5511991006687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-churchBlue-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="border-t border-churchBlue-800 mt-8 pt-8">
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-4">Horários de Culto</h5>
              <div className="flex flex-col sm:flex-row justify-center gap-8 text-churchBlue-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Domingos: 10h15 (Manhã)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Domingos: 19h30 (Éden)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-churchBlue-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-churchBlue-400 text-sm">
              <p>&copy; 2024 Igreja Presbiteriana Metropolitana. Todos os direitos reservados.</p>
              <p>Desenvolvido com ❤️ para a glória de Deus</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
