interface ISlider {
  container?: string;
  numberOfSlides?: number;
  speed?: 300 | 500 | 700;
  direction?: "horizontal" | "vertical";
  dots?: boolean;
  arrows?: boolean;
  animationName?: string;
}

function createSlider({
  container = "", 
  numberOfSlides = 1, 
  speed = 300,
  direction = "horizontal", 
  dots = true, 
  arrows = true,
  animationName = "ad"
}: ISlider): void {
  console.log(container, numberOfSlides, speed, direction, dots, arrows, animationName)
}

createSlider({});

type CustomSliderOptions = Required<Omit<ISlider, "speed" | "animationName">>;

interface ICustomSlider extends CustomSliderOptions {
  speed: number;
};

const customSliderOptions: ICustomSlider = {
  container: "id",
  numberOfSlides: 4,
  speed: 1110,
  direction: "horizontal",
  dots: true,
  arrows: true,
};

function createCustomSlider(options: ICustomSlider): void {
  if("container" in options) {
    console.log(options)
  }
}

createCustomSlider(customSliderOptions)