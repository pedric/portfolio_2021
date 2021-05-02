import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Logo from "../components/common/Logo";
import Swipe from "../classes/Swipe";

describe("Class swipe", () => {
  it("sets class variables correct", () => {
    const testClass = new Swipe();
    testClass.setStartPoints(45, 33);
    testClass.setEndPoints(55, 25);
    expect(testClass.swipeStart.x - testClass.swipeEnd.y).toBe(20);
  });
});

describe("Class swipe", () => {
  it("constructor inits vars", () => {
    const testClass = new Swipe();
    expect(typeof testClass.swipeStart).toBe("object");
  });
});

describe("Gallery", () => {
  it("sets title to and render thumbs", () => {
    const images = [
      {
        gallery_image: { url: "testurl" },
      },
    ];
    render(<Gallery images={images} />);
    expect(document.querySelectorAll("[title='gallery thumb 1']").length).toBe(
      1
    );
  });
});

describe("Hero", () => {
  it("renders heading", () => {
    render(<Hero tagline='test heading' />);
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
});

describe("Logo", () => {
  it("clears anchor hover effects with class 'no-effect'", () => {
    render(<Logo />);
    expect(document.getElementsByClassName("no-effect").length).toBe(1);
  });
});
