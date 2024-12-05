'use client';

interface SensorModalProps {
    sensor: number;
}

const SensorModal = ({ sensor }: SensorModalProps) => {
    return (
        <div>
            {sensor != 0 && (
                <div className="fixed top-1/2 right-5 transform -translate-y-1/2 w-[350px] h-[485px] bg-white z-20 rounded-md">
                    <p>Senzor {sensor}</p>
                </div>
            )}
        </div>
    );
};

export default SensorModal;
