import { Container } from "@/presentation/components/container";
import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import { Label } from "@/presentation/components/ui/label";
import { Textarea } from "@/presentation/components/ui/textarea";
import Image from "next/image";

export function HomeLayout() {
  return (
    <>
      <main>
        <section className="bg-hero-pattern w-full bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center gap-3 bg-fixed py-20 p-3 lg:flex-row-reverse lg:gap-10 xl:gap-20">
          <Image src="/hero-illustration.svg" alt="Salão de beleza" width={400} height={400} />
          <div className="max-w-sm space-y-3 text-center p-3 lg:text-left">
            <div className="space-y-1">
              <h1 className="text-zinc-50 font-black text-5xl lg:text-6xl">Salão Web</h1>
              <p className="text-zinc-100">
                Agende seu horário em salões de beleza com facilidade e rapidez.
              </p>
            </div>
            <div>
              <Button variant="secondary" className="font-semibold text-brand-500 w-full">
                Agendar horário
              </Button>
            </div>
          </div>
        </section>

        <section>
          <Container className="py-10 lg:py-20">
            <h2 className="text-3xl font-medium">Como funciona</h2>

            <div className="px-10 py-16 flex flex-col items-center gap-16 lg:max-w-4xl lg:mx-auto lg:px-0">
              <div className="flex flex-col gap-10 items-center w-full lg:flex-row">
                <Image src="/locale-illustration.svg" alt="Buscar" width={300} height={300} />
                <div className="space-y-3 w-full">
                  <h3 className="text-2xl font-semibold">Buscar</h3>
                  <p className="text-lg">Encontre o salão de beleza mais próximo de você</p>
                </div>
              </div>

              <div className="flex flex-col gap-10 items-center w-full lg:flex-row-reverse">
                <Image
                  src="/schedule-illustration.svg"
                  alt="Agendar"
                  width={300}
                  height={300}
                />
                <div className="space-y-3 w-full lg:text-right">
                  <h3 className="text-2xl font-semibold">Agendar</h3>
                  <p className="text-lg">Escolha o horário e serviço que deseja</p>
                </div>
              </div>

              <div className="flex flex-col gap-10 items-center w-full lg:flex-row">
                <Image
                  src="/confirmed-illustration.svg"
                  alt="Confirmar"
                  width={300}
                  height={300}
                />
                <div className="space-y-3 w-full">
                  <h3 className="text-2xl font-semibold">Confirmar</h3>
                  <p className="text-lg">Pronto! Seu horário está agendado!</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex flex-col justify-center gap-10 py-20 md:flex-row lg:gap-20">
            <div className="max-w-72">
              <h2 className="text-2xl lg:text-3xl">Quer fazer parte?</h2>
              <p className="text-lg">
                Se você é um salão de beleza e quer fazer parte da nossa plataforma, entre em
                contato conosco.
              </p>
            </div>

            <form className="flex flex-col space-y-3 max-w-lg md:px-6 lg:px-0 lg:w-full">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" className="rounded p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" className="rounded p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" className="rounded p-2" />
              </div>
              <Button variant="brandGradient" className="font-semibold w-full mt-6">
                Enviar
              </Button>
            </form>
          </Container>
        </section>

        <footer className="border-t p-10 text-center">
          <p>Salão Web &copy; {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
