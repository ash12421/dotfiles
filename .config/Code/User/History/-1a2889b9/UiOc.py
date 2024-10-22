import random
import time

class SelectiveRepeatARQ:
    def __init__(self, num_frames, window_size):
        self.num_frames = num_frames
        self.window_size = window_size
        self.sent_frames = [None] * num_frames
        self.acknowledged_frames = [False] * num_frames
        self.frame_timer = [None] * num_frames
        self.timeout = 5  # Timeout period in seconds
        self.base = 0  # Window's base index
        self.next_seq_num = 0  # Next sequence number to send
    
    def send_frame(self, frame_number):
        print(f"Sending frame {frame_number}")
        self.sent_frames[frame_number] = frame_number
        self.frame_timer[frame_number] = time.time()  # Start timer for the frame
    
    def receive_ack(self, frame_number):
        if frame_number < self.base or frame_number >= self.base + self.window_size:
            print(f"Acknowledgment for frame {frame_number} is out of the current window.")
        else:
            print(f"Acknowledgment received for frame {frame_number}")
            self.acknowledged_frames[frame_number] = True
            self.frame_timer[frame_number] = None
    
    def check_for_timeouts(self):
        current_time = time.time()
        for i in range(self.base, min(self.base + self.window_size, self.num_frames)):
            if self.sent_frames[i] is not None and not self.acknowledged_frames[i]:
                if current_time - self.frame_timer[i] > self.timeout:
                    print(f"Timeout occurred for frame {i}, resending it")
                    self.send_frame(i)
    
    def can_send(self):
        return self.next_seq_num < self.base + self.window_size and self.next_seq_num < self.num_frames
    
    def simulate(self):
        while self.base < self.num_frames:
            while self.can_send():
                self.send_frame(self.next_seq_num)
                self.next_seq_num += 1
            
            # Simulate ACK reception randomly for the frames in the current window
            for i in range(self.base, min(self.base + self.window_size, self.num_frames)):
                if not self.acknowledged_frames[i] and random.choice([True, False]):
                    self.receive_ack(i)
            
            # Check for timeouts and resend frames if necessary
            self.check_for_timeouts()
            
            # Slide the window
            while self.base < self.num_frames and self.acknowledged_frames[self.base]:
                print(f"Sliding window, moving base from {self.base} to {self.base + 1}")
                self.base += 1
            
            time.sleep(1)  # Simulate network delay

# User specifies the number of frames and window size
num_frames = int(input("Enter the number of frames to send: "))
window_size = int(input("Enter the window size: "))

# Initialize and run the simulation
sr_arq = SelectiveRepeatARQ(num_frames, window_size)
sr_arq.simulate()
