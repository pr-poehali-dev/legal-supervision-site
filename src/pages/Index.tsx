import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Scale" className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                LegalSuper
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                О нас
              </a>
              <a
                href="#cases"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Кейсы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Профессиональный
              <br />
              <span className="text-blue-600">Юридический Супервайзинг</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Обеспечиваем контроль, консультации и сопровождение юридических
              дел для достижения максимальной эффективности и минимизации рисков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Icon name="CheckCircle" className="mr-2 h-5 w-5" />
                Заказать супервайзинг
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем комплексный надзор за юридическими процессами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Users" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Опыт экспертов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Команда юристов с многолетним опытом в бизнесе и глубокими
                  знаниями процессов
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Target" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Индивидуальный подход
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Персонализированные решения для каждого клиента с учетом
                  специфики дела
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Clock" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Оперативность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Быстрое реагирование на изменения и мгновенная связь с
                  клиентом
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Legal Supervision */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Что такое юридический супервайзинг?
              </h2>
              <p className="text-gray-600 mb-6">
                Юридический супервайзинг — это профессиональный контроль и
                надзор за ведением юридических дел, направленный на повышение
                качества правовой работы и минимизацию рисков.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-6 w-6 text-green-600 mr-3 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Анализ дел</h3>
                    <p className="text-gray-600">
                      Глубокий анализ каждого дела на всех этапах
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-6 w-6 text-green-600 mr-3 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Контроль процедур
                    </h3>
                    <p className="text-gray-600">
                      Мониторинг соблюдения всех юридических процедур
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon
                    name="CheckCircle"
                    className="h-6 w-6 text-green-600 mr-3 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Предотвращение ошибок
                    </h3>
                    <p className="text-gray-600">
                      Выявление и устранение рисков на раннем этапе
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Для кого наши услуги?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Icon
                    name="Briefcase"
                    className="h-8 w-8 text-blue-600 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Юристы</h4>
                    <p className="text-sm text-gray-600">
                      Частные практики и юридические фирмы
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Icon
                    name="Building"
                    className="h-8 w-8 text-blue-600 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Юридические отделы
                    </h4>
                    <p className="text-sm text-gray-600">
                      Корпоративные юридические департаменты
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Icon
                    name="TrendingUp"
                    className="h-8 w-8 text-blue-600 mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Предприниматели
                    </h4>
                    <p className="text-sm text-gray-600">
                      Бизнес-руководители и владельцы компаний
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Комплексный супервизорский контроль юридических процессов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Building2"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">
                  Корпоративное сопровождение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Полный цикл юридического сопровождения корпоративных процессов
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="HandshakeIcon"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Сопровождение сделок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Надзор за проведением сложных коммерческих операций
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Shield"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Комплаенс</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Обеспечение соответствия требованиям законодательства
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Gavel"
                  className="h-12 w-12 text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-lg">Разрешение споров</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Супервайзинг процессов урегулирования конфликтов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Результаты нашей работы</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Цифры, которые говорят о качестве нашего супервайзинга
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Дел под супервайзингом</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Успешных исходов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-blue-100">Снижение рисков</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-blue-100">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              О нашей компании
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы специализируемся на развитии надзора за юридическими процессами
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h3>
              <p className="text-gray-600 mb-6">
                Повысить качество юридической работы в России через внедрение
                профессионального супервайзинга, обеспечивая надежность,
                прозрачность и ответственность в каждом деле.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">
                    Надежность
                  </Badge>
                  <span className="text-gray-600">
                    Гарантированное качество контроля
                  </span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">
                    Прозрачность
                  </Badge>
                  <span className="text-gray-600">
                    Открытость всех процессов
                  </span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">
                    Ответственность
                  </Badge>
                  <span className="text-gray-600">
                    Персональная ответственность за результат
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Наша команда
              </h3>
              <p className="text-gray-600 mb-6">
                Команда экспертов-супервайзеров с глубоким пониманием
                бизнес-процессов и многолетним опытом в юриспруденции.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-2 border-gray-100">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-2 p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon
                        name="GraduationCap"
                        className="h-6 w-6 text-blue-600"
                      />
                    </div>
                    <CardTitle className="text-lg">15+ лет опыта</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      Средний опыт наших экспертов
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-100">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-2 p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon name="Award" className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Сертификации</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      Международные стандарты качества
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Успешные кейсы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Примеры нашего профессионального супервайзинга
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-800">
                    Завершен
                  </Badge>
                  <Icon name="TrendingUp" className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">
                  Корпоративная реструктуризация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Супервайзинг процесса реструктуризации крупной IT-компании.
                  Предотвращены 3 критических ошибки, сэкономлено 15 млн рублей.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Clock" className="h-4 w-4 mr-1" />
                  <span>6 месяцев</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-800">
                    Завершен
                  </Badge>
                  <Icon name="Shield" className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">M&A сделка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Контроль слияния двух производственных компаний. Выявлены и
                  устранены 5 потенциальных рисков.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Clock" className="h-4 w-4 mr-1" />
                  <span>4 месяца</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-800">
                    В процессе
                  </Badge>
                  <Icon name="Scale" className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Арбитражное дело</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Супервайзинг крупного арбитражного спора. Оптимизирована
                  стратегия защиты, повышены шансы на успех.
                </CardDescription>
                <div className="flex items-center text-sm text-gray-600">
                  <Icon name="Clock" className="h-4 w-4 mr-1" />
                  <span>8 месяцев</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Получите профессиональную консультацию по вашему делу
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">info@legalsuper.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      className="h-5 w-5 text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">
                      г. Москва, ул. Тверская, д. 15
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Пн-Пт: 9:00 - 18:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Бесплатная консультация
                  </CardTitle>
                  <CardDescription>
                    Получите предварительную оценку вашего дела
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                      Написать в WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <Icon name="Phone" className="mr-2 h-4 w-4" />
                      Заказать звонок
                    </Button>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Или заполните форму:
                    </h4>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Icon name="FileText" className="mr-2 h-4 w-4" />
                      Заполнить форму обратной связи
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Scale" className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">LegalSuper</span>
              </div>
              <p className="text-gray-400">
                Профессиональный юридический супервайзинг для достижения
                максимальной эффективности ваших дел
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#cases" className="hover:text-white">
                    Кейсы
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="MessageCircle" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Mail" className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="Linkedin" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LegalSuper. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
