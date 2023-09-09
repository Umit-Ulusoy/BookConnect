import { render, screen, fireEvent } from '@testing-library/react';

describe('Timer component tests', () => {
  test('Timer starts and stops correctly', async () => {
    render(<Timer />);
    
    const startButton = screen.getByText("Başlat");
    fireEvent.click(startButton);
   
    let stopButton = await screen.findByText('Durdur');
    const cancelButton = screen.getByText('İptal');

    expect(stopButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(startButton).toHaveTextContent('Durdur');

    fireEvent.click(stopButton);

    stopButton = screen.queryByText('Durdur'); 

    expect(stopButton).toBeNull();
    expect(cancelButton).toBeNull();

    const continueButton = screen.getByText('Devam Et');
    expect(continueButton).toBeInTheDocument();

    fireEvent.click(continueButton);

    stopButton = await screen.findByText('Durdur');
    expect(stopButton).toBeInTheDocument();
  });

  test('Timer pauses and resumes correctly', async () => {
    render(<Timer />);
    
    const startButton = screen.getByText("Başlat");
    fireEvent.click(startButton);

    const pauseButton = await screen.findByText('Duraklat');
    expect(pauseButton).toBeInTheDocument();

    fireEvent.click(pauseButton);

    const resumeButton = screen.getByText('Devam Et');
    expect(resumeButton).toBeInTheDocument();

    fireEvent.click(resumeButton);

    const pauseButtonAfterResume = await screen.findByText('Duraklat');
    expect(pauseButtonAfterResume).toBeInTheDocument();
  });

  test('Timer resets correctly', async () => {
    render(<Timer />);
    
    const startButton = screen.getByText("Başlat");
    fireEvent.click(startButton);

    const resetButton = screen.getByText('İptal');
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(resetButton);

    const startButtonAfterReset = await screen.findByText('Başlat');
    expect(startButtonAfterReset).toBeInTheDocument();
  });
});
